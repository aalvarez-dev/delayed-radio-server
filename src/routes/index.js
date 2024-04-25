import express from "express";

// Import routes from other files
import countriesRoutes from "./countries.js";
import radiosRoutes from "./radios.js";
import stationsRoutes from "./stations.js";
import streamsRoutes from "./streams.js";

// eslint-disable-next-line new-cap
const router = express.Router();

// Default route
router.get("/api", (req, res) => {
  res.send("Welcome to Delayed-Radio API!");
});

// Use user-related routes
router.use("/api/countries", countriesRoutes);
router.use("/api/radios", radiosRoutes);
router.use("/api/stations", stationsRoutes);
router.use("/api/streams", streamsRoutes);

router.get("*", (req, res) => {
  res.status(404).send("404 | Page not found");
});

export default router;
