import mongoose, { mongo } from "mongoose";

interface User {
  email: string;
  username: string;
  password: string;
  name: string;
  location: string;
}

const userSchema = new mongoose.Schema<User>({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  location: String,
});

const User = mongoose.model("User", userSchema);

export default User;
