import { Request, Response, NextFunction } from "express";
import { IApiResponse } from "../../common/interfaces/response.types";
import { GetBookingQuery, IBookingData } from "../interfaces/booking.types";
import {
  getUserBookingByEmail,
  saveBookingToDatabase,
} from "../services/booking.service";

export const saveBooking = async (
  req: Request<{}, {}, IBookingData>,
  res: Response<IApiResponse<IBookingData>>,
  next: NextFunction
): Promise<void> => {
  try {
    const savedBooking = await saveBookingToDatabase(req.body);

    res.status(201).json({
      success: true,
      message: "Booking submitted successfully",
      data: savedBooking,
      timestamp: new Date().toISOString(),
      path: req.originalUrl,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserBookings = async (
  req: Request<{}, {}, {}, GetBookingQuery>,
  res: Response<IApiResponse<IBookingData[]>>,
  next: NextFunction
): Promise<void> => {
  try {
    const { email } = req.query;

    const bookings = await getUserBookingByEmail(email as string);

    res.status(200).json({
      success: true,
      message:
        bookings.length === 0
          ? "No Bookings found for this email"
          : "Bookings fetched successfully",
      data: bookings,
      timestamp: new Date().toISOString(),
      path: req.originalUrl,
    });
  } catch (error) {
    next(error);
  }
};
