import AppError from "../../common/utils/app.error";
import { IMechanicData } from "../interfaces/mechanic.types";
import Mechanic from "../models/mechanic.model";
import { MongoServerError } from "mongodb";

export const saveMechanicApplication = async (
  booking: IMechanicData
): Promise<IMechanicData> => {
  try {
    return await Mechanic.create(booking);
  } catch (error) {
    if (error instanceof MongoServerError && error.code === 11000) {
      throw new AppError("An application already exists for this email", 409);
    }

    if (error instanceof Error) {
      throw new AppError(error.message, 500);
    }

    throw new AppError("Failed to save Application to the database", 500);
  }
};

export const getMechanicApplication = async (
  email: string
): Promise<IMechanicData | null> => {
  if (!email) {
    throw new AppError("Email is required to fetch Application", 400);
  }

  return Mechanic.findOne({ email }).lean<IMechanicData>();
};
