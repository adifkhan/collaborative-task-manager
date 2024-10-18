import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email address"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a strong password"],
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
