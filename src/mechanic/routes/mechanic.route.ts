import express from "express";
import {
  getApplication,
  saveApplication,
} from "../controllers/mechanic.controller";

const mechanicRoute = express.Router();

mechanicRoute.post("/", saveApplication);
mechanicRoute.get("/", getApplication);

export default mechanicRoute;
