import dotenv from "dotenv";
dotenv.config();

import connectToDatabase from "./configs/db.config";
import app from "./app";

const port = process.env.PORT || 8080;

const startServer = async (): Promise<void> => {
  try {
    await connectToDatabase();

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to start the server\n", error);
    process.exit(1);
  }
};

startServer();
