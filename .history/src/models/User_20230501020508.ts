import mongoose, { mongo } from "mongoose";

interface Plan {
  email: string;
  username: string;
  password: string;
  name: string;
  location: string;
}

const userSchema = new mongoose.Schema<Plan>({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  location: String,
});

const Plan = mongoose.model("Plan", userSchema);

export default Plan;
