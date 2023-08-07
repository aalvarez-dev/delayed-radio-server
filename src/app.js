// Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config();

// To colorize the console output
import * as colors from "colors";

// Import the main router
import express from "express";
const app = express();
import routes from "./routes/index.js";

// Middleware to parse incoming JSON data
app.use(express.json());

// Use the main router
app.use("/", routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
