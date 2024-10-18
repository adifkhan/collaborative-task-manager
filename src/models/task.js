import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },
    creator: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

const Task = mongoose.models.tasks || mongoose.model("tasks", taskSchema);

export default Task;
