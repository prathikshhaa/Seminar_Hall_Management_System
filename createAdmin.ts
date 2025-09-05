const mongoose = require("mongoose");
const argon2 = require("argon2");
const dbConnect = require("./utils/dbConnect");
const User = require("./models/User");


async function createAdmin() {
  try {
    await dbConnect();

    const email = "admin@example.com";
    const password = "admin123";
    const role = "admin";

    const existing = await User.findOne({ email });
    if (existing) {
      console.log("Admin already exists!");
      return mongoose.connection.close();
    }

    const hashedPassword = await argon2.hash(password);

    const admin = new User({
      email,
      password: hashedPassword,
      role,
    });

    await admin.save();
    console.log("✅ Admin user created successfully:", { email, role });
    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error creating admin:", error);
    mongoose.connection.close();
  }
}

createAdmin();
