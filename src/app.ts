import express from "express";
import { GlobalErrorHandler } from "./common/middlewares/error.middleware";
import apiRoutes from "./routes/index.route";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Vehicle Service Management System, Backend API");
});

app.use("/api/v1", apiRoutes);

app.use(GlobalErrorHandler);

export default app;
