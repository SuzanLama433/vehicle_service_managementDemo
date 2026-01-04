import mongoose, { Schema } from "mongoose";
import { IBooking } from "../interfaces/booking.types";

const bookingSchema = new Schema<IBooking>(
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
    address: {
      type: String,
      required: [true, "Address is required."],
      trim: true,
      maxlength: [200, "Address cannot exceed 200 characters."],
    },
    vehicleNumber: {
      type: String,
      required: [true, "Vehicle number is required."],
      trim: true,
      uppercase: true,
      match: [/^[A-Z0-9-]{5,15}$/, "Invalid vehicle number format."],
    },
    vehicleModel: {
      type: String,
      required: [true, "Vehicle model is required."],
      trim: true,
      maxlength: [50, "Vehicle model cannot exceed 50 characters."],
    },
    appointmentDate: {
      type: Date,
      required: [true, "Appointment date is required."],
      validate: {
        validator: (value: Date) => value > new Date(),
        message: "Appointment date must be in the future.",
      },
    },
    serviceCategory: {
      type: String,
      required: [true, "Service category is required."],
    },
    serviceCenter: {
      type: String,
      required: [true, "Service center is required."],
      trim: true,
    },
    problemDescription: {
      type: String,
      required: false,
      trim: true,
      maxlength: [500, "Problem description cannot exceed 500 characters."],
    },
  },
  { timestamps: { createdAt: "created_on", updatedAt: "updated_on" } }
);

const Booking = mongoose.model<IBooking>("Booking", bookingSchema);
export default Booking;
