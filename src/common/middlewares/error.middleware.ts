import { Request, Response, NextFunction } from "express";
import { IErrorResponse } from "../../common/interfaces/response.types";
import AppError from "../utils/app.error";

export const GlobalErrorHandler = (
  err: any,
  req: Request,
  res: Response<IErrorResponse>,
  _next: NextFunction
) => {
  const error =
    err instanceof AppError
      ? err
      : new AppError(err.message || "Something went wrong", 500);

  res.status(error.statusCode).json({
    success: false,
    message: error.message,
    statusCode: error.statusCode,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
  });
};
