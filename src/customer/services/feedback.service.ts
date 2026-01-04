import AppError from "../../common/utils/app.error";
import { IFeedback, IFeedbackData } from "../interfaces/feedback.types";
import Feedback from "../models/feedback.model";

export const saveFeedbackToDatabase = async (
  feedback: IFeedbackData
): Promise<IFeedback> => {
  try {
    return await Feedback.create(feedback);
  } catch (error) {
    if (error instanceof Error) {
      throw new AppError(error.message, 500);
    }

    throw new AppError("Failed to save feedback to the database", 500);
  }
};

export const getUserFeedbackByEmail = async (
  email: string,
  limit = 5
): Promise<IFeedback[]> => {
  if (!email) {
    throw new AppError("Email is required to fetch feedback", 400);
  }

  return Feedback.find({ email })
    .sort({ created_on: -1 })
    .limit(limit)
    .lean<IFeedback[]>();
};
