import { Request, Response, NextFunction } from "express";
import {
  getUserFeedbackByEmail,
  saveFeedbackToDatabase,
} from "../services/feedback.service";
import { IApiResponse } from "../../common/interfaces/response.types";
import {
  GetFeedbackQuery,
  IFeedback,
  IFeedbackData,
} from "../interfaces/feedback.types";

export const saveFeedback = async (
  req: Request<{}, {}, IFeedbackData>,
  res: Response<IApiResponse<IFeedback>>,
  next: NextFunction
): Promise<void> => {
  try {
    const savedFeedback = await saveFeedbackToDatabase(req.body);

    res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      data: savedFeedback,
      timestamp: new Date().toISOString(),
      path: req.originalUrl,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserFeedbacks = async (
  req: Request<{}, {}, {}, GetFeedbackQuery>,
  res: Response<IApiResponse<IFeedback[]>>,
  next: NextFunction
): Promise<void> => {
  try {
    const { email } = req.query;

    const feedbacks = await getUserFeedbackByEmail(email as string);

    res.status(200).json({
      success: true,
      message:
        feedbacks.length === 0
          ? "No feedback found for this email"
          : "Feedback fetched successfully",
      data: feedbacks,
      timestamp: new Date().toISOString(),
      path: req.originalUrl,
    });
  } catch (error) {
    next(error);
  }
};
