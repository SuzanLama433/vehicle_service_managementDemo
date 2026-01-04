import mongoose from "mongoose";

const connectToDatabase = async (): Promise<void> => {
  const mongoUri = process.env.MONGO_URI as string;

  if (!mongoUri) {
    console.error("MongoDB URI is missing in environment variables");
    process.exit(1);
  }

  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(mongoUri);
    console.log("Successfully connected to the database.");
  } catch (error) {
    console.error("Failed to connect to the database.");
    console.error(error);
    process.exit(1);
  }
};

export default connectToDatabase;
