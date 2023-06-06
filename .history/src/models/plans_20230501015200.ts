import mongoose, { mongo } from "mongoose";

interface plan {
  email: string;
  username: string;
  password: string;
  name: string;
  location: string;
}

const planSchema = new mongoose.Schema<plan>({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  location: String,
});

const Plan = mongoose.model("User", planSchema);

export default Plan;
