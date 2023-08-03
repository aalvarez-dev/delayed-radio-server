const express = require("express");
// eslint-disable-next-line new-cap
const router = express.Router();

const {
  getStations,
  getStationsByRadio,
  getStation,
  createStation,
  updateStation,
  deleteStation,
} = require("../controllers/radios.js");

router.get("/api/stations/", getStations);

router.get("/api/:radioID/stations/", getStationsByRadio);

router.get("/api/station/:stationID", getStation);

router.post("/api/station/", createStation);

router.put("/api/station/:stationID", updateStation);

router.delete("/api/station/:stationID", deleteStation);

export { router };
