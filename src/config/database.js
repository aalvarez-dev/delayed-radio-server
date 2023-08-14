// Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

// mongoose.set("debug", true);

const connectToDatabase = async () => {
  const mongoUrl = process.env.MONGO_URI;
  mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Sucessfully connected to the database`.green);
    })
    .catch((error) => {
      console.error(`Error connecting to the database: ${error}`.red);
    });
};

export { connectToDatabase };
