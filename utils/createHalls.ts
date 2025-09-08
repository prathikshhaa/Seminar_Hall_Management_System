import mongoose from "mongoose";
import dbConnect from "./dbConnect.js";
import Hall from "../models/Hall.js";

async function createHalls() {
  try {
    await dbConnect();

    const halls = [
      { name: "Ground Floor Seminar Hall", capacity: 120, location: "Ground Floor" },
      { name: "First Floor Seminar Hall", capacity: 150, location: "First Floor" },
      { name: "Second Floor Seminar Hall", capacity: 180, location: "Second Floor" },
      { name: "Nethravthi Auditorium", capacity: 300, location: "Main Building" },
      { name: "Shristi Auditorium", capacity: 250, location: "Bus Shelter" }
    ];

    await Hall.insertMany(halls);
    console.log("✅ All seminar halls added successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error creating halls:", error);
    mongoose.connection.close();
  }
}

createHalls();
