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

interface User {
  email: string;
  username: string;
  password: string;
  name: string;
  location: string;
}

const userrSchema = new mongoose.Schema<User>({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  location: String,
});

const User = mongoose.model("User", userSchema);
const Users = mongoose.model("User", usersSchema);

export default User;
