import { Request, Response, NextFunction } from "express";
import { IApiResponse } from "../../common/interfaces/response.types";
import { GetMechanicQuery, IMechanicData } from "../interfaces/mechanic.types";
import {
  getMechanicApplication,
  saveMechanicApplication,
} from "../services/mechanic.service";

export const saveApplication = async (
  req: Request<{}, {}, IMechanicData>,
  res: Response<IApiResponse<IMechanicData>>,
  next: NextFunction
): Promise<void> => {
  try {
    const savedApplication = await saveMechanicApplication(req.body);

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: savedApplication,
      timestamp: new Date().toISOString(),
      path: req.originalUrl,
    });
  } catch (error) {
    next(error);
  }
};

export const getApplication = async (
  req: Request<{}, {}, {}, GetMechanicQuery>,
  res: Response<IApiResponse<IMechanicData | null>>,
  next: NextFunction
): Promise<void> => {
  try {
    const { email } = req.query;

    const application = await getMechanicApplication(email as string);

    res.status(200).json({
      success: true,
      message:
        application == null
          ? "No Application found for this email"
          : "Application fetched successfully",
      data: application,
      timestamp: new Date().toISOString(),
      path: req.originalUrl,
    });
  } catch (error) {
    next(error);
  }
};
