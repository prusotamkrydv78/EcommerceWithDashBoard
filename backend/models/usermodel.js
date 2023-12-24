import mongoose from "mongoose";

const userSchem = new mongoose.Schema(
  {
    name: {
      type: String,
      rquired: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    }, 
    role: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export default mongoose.model("UsersData", userSchem);
