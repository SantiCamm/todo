import mongoose from "mongoose";

interface Todo {
  creator: string;
  createdAt: Date;
  text: string;
  completed: boolean;
}

const TodoSchema = new mongoose.Schema<Todo>({
  creator: {
    type: String,
    required: [true, "Please add a creator"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  text: { type: String, default: "" },
  completed: { type: Boolean, default: false },
});

export default mongoose.model("Todo", TodoSchema);
