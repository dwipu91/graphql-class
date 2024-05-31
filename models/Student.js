import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    age: {
      type: Number,
      require: true,
    },
    email: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      require: true,
      trim: true,
    },
    mobile: {
      type: String,
      require: true,
      trim: true,
    },
    gender: {
      type: String,
      require: true,
      enum: ["Male", "Femal", "Custom"],
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Student", studentSchema);
