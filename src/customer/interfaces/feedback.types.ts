import { Document } from "mongoose";

export interface IFeedback extends Document {
  email: string;
  username: string;
  vehicleNumber: string;
  serviceCenter: string;
  rating: number;
  comments?: string;
}

export interface IFeedbackData {
  username: string;
  email: string;
  vehicleNumber: string;
  serviceCenter: string;
  rating: number;
  comments?: string;
}

export interface GetFeedbackQuery {
  email?: string;
}
