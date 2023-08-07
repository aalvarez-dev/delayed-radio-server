import express from "express";
// eslint-disable-next-line new-cap
const router = express.Router();

import {
  getStations,
  // getStationsByRadio,
  getStation,
  createStation,
  updateStation,
  deleteStation,
} from "../controllers/radios.js";

router.get("/", getStations);

// router.get("/api/:radioID/stations/", getStationsByRadio);

router.get("/:stationID", getStation);

router.post("/", createStation);

router.put("/:stationID", updateStation);

router.delete("/:stationID", deleteStation);

export default router;
