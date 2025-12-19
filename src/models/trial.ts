import mongoose from "mongoose";

const trialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const Trial = mongoose.model("Trial", trialSchema);
export default Trial;
