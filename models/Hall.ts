import mongoose from "mongoose";

const HallSchema = new mongoose.Schema({
  name: String,
  capacity: Number,
});

export default mongoose.models.Hall || mongoose.model("Hall", HallSchema);
