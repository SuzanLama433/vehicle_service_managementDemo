import AppError from "../../common/utils/app.error";
import { IBookingData } from "../interfaces/booking.types";
import Booking from "../models/booking.model";

export const saveBookingToDatabase = async (
  booking: IBookingData
): Promise<IBookingData> => {
  try {
    return await Booking.create(booking);
  } catch (error) {
    if (error instanceof Error) {
      throw new AppError(error.message, 500);
    }

    throw new AppError("Failed to save booking to the database", 500);
  }
};

export const getUserBookingByEmail = async (
  email: string,
  limit = 5
): Promise<IBookingData[]> => {
  if (!email) {
    throw new AppError("Email is required to fetch booking", 400);
  }

  return Booking.find({ email })
    .sort({ created_on: -1 })
    .limit(limit)
    .lean<IBookingData[]>();
};
