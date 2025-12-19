import { Request, Response } from "express";

export const greetAnother = (req: Request, res: Response): void => {
  res.send("Hello there, I am Another Sujan.");
}