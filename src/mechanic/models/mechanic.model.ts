import mongoose, { Schema } from "mongoose";
import { IMechanic } from "../interfaces/mechanic.types";

const mechanicSchema = new Schema<IMechanic>(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
      match: [
        /^[A-Za-z]+(?: [A-Za-z]+)*$/,
        "Name must contain only letters and spaces.",
      ],
      maxlength: [50, "Name cannot exceed 50 characters."],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required."],
      trim: true,
      lowercase: true,
      match: [/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Invalid email address."],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required."],
      trim: true,
      match: [/^\+?\d{10,15}$/, "Invalid phone number format."],
    },
    experience: {
      type: Number,
      required: false,
      min: [0, "Experience must be at least 0 years."],
      max: [50, "Experience cannot exceed 50 years."],
    },
    category: {
      type: String,
      required: [true, "Category is required."],
      trim: true,
      maxlength: [50, "Category cannot exceed 50 characters."],
    },
    skills: {
      type: [String],
      required: [true, "Skills are required."],
      validate: {
        validator: (v: string[]) => v.length > 0,
        message: "Mechanic must have at least one skill.",
      },
    },
    certifications: {
      type: [String],
      required: false,
    },
    serviceCenter: {
      type: String,
      required: [true, "Service center is required."],
      trim: true,
      maxlength: [100, "Service center name cannot exceed 100 characters."],
    },
  },
  { timestamps: { createdAt: "created_on", updatedAt: "updated_on" } }
);

const Mechanic = mongoose.model<IMechanic>("Mechanic", mechanicSchema);
export default Mechanic;
