import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/db";
import sujanRouter from "./routes/sujanRoute";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Vehicle Service Management System, Backend API");
});

connectDB();

app.use("/trial", sujanRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
