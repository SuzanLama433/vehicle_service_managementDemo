import express from "express";
import {
  getUserFeedbacks,
  saveFeedback,
} from "../controllers/feedback.controller";

const feedbackRoute = express.Router();

feedbackRoute.post("/", saveFeedback);
feedbackRoute.get("/", getUserFeedbacks);

export default feedbackRoute;
