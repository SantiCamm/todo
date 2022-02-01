import mongoose from "mongoose";

interface User {
  id: string,
  name: string,
  email: string,
}

const UserSchema = new mongoose.Schema<User>({
  id: { type: String, unique: true },
  name: {
    type: String,
    unique: false,
    required: [true, "Please provide a valid name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide a valid email"],
  },
});

export default mongoose.model("User", UserSchema);
