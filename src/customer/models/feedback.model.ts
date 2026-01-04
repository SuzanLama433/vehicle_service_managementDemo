import mongoose, { Schema } from "mongoose";
import { IFeedback } from "../interfaces/feedback.types";

const feedbackSchema = new Schema<IFeedback>(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      trim: true,
      lowercase: true,
      match: [/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Invalid email address."],
    },
    username: {
      type: String,
      required: [true, "Username is required."],
      trim: true,
      match: [/^[A-Za-z][A-Za-z0-9_-]{2,14}$/, "Invalid username format."],
    },
    vehicleNumber: {
      type: String,
      required: [true, "Vehicle number is required."],
      trim: true,
      uppercase: true,
    },
    serviceCenter: {
      type: String,
      required: [true, "Service center is required."],
      trim: true,
    },
    rating: {
      type: Number,
      required: [true, "Rating is required."],
      min: [1, "Rating must be at least 1 star."],
      max: [5, "Rating cannot exceed 5 stars."],
    },
    comments: {
      type: String,
      required: false,
      trim: true,
      maxlength: [500, "Comments cannot exceed 500 characters."],
    },
  },
  { timestamps: { createdAt: "created_on", updatedAt: "updated_on" } }
);

const Feedback = mongoose.model<IFeedback>("Feedback", feedbackSchema);
export default Feedback;
