import express from "express";

// Import routes from other files
import { countriesRoutes } from "./countries";
import { radiosRoutes } from "./radios";
import { stationsRoutes } from "./stations";

// eslint-disable-next-line new-cap
const router = express.Router();

// Default route
router.get("/api", (req, res) => {
  res.send("Welcome to Delayed-Radio API!");
});

// Use user-related routes
router.use("/api/countries", countriesRoutes);
router.use("/api/radios", radiosRoutes);
router.use("/users", stationsRoutes);

export { router as routes };
