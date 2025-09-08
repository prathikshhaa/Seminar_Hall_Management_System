import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // 👈 Load .env file

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) return;

  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error("❌ MONGO_URI is not defined in environment variables");
  }

  try {
    await mongoose.connect(uri);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
};

export default dbConnect;
