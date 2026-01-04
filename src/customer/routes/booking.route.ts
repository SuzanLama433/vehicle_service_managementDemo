import express from "express";
import {
  getUserBookings,
  saveBooking,
} from "../controllers/booking.controller";

const bookingRoute = express.Router();

bookingRoute.post("/", saveBooking);
bookingRoute.get("/", getUserBookings);

export default bookingRoute;
