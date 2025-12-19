import { Request, Response } from "express";
import Trial from "../models/trial";

export const greet = (req: Request, res: Response): void => {
  res.send("Hello there, I am Sujan Lama.");
};

export const greetAgain = (req: Request, res: Response): void => {
  res.send("Hello there, I am Aashish Lama.");
};

export const greetOnceMore = (req: Request, res: Response): void => {
  res.send("Hello there, I am Saugat Lama.");
};

export const addDataToDb = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, age } = req.body;

    const newData = new Trial({ name, age });

    await newData.save();

    res.status(201).json({ message: "Data added successfully", data: newData });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
