import express from "express";
import {
  addDataToDb,
  greet,
  greetAgain,
  greetOnceMore,
} from "../controllers/sujanController";
import { greetAnother } from "../controllers/anotherSujan";

const sujanRouter = express.Router();

sujanRouter.get("/", greet);
sujanRouter.get("/aashish", greetAgain);
sujanRouter.get("/saugat", greetOnceMore);
sujanRouter.get("/another", greetAnother);
sujanRouter.post("/", addDataToDb);

export default sujanRouter;
