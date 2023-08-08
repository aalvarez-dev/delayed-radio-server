import express from "express";
// eslint-disable-next-line new-cap
const router = express.Router();

import {
  getStations,
  getStationsByRadio,
  getStation,
  createStation,
  updateStation,
  deleteStation,
} from "../controllers/radios.js";

router.get("/", getStations);

router.get("/radio/:radioId", getStationsByRadio);

router.get("/:id", getStation);

router.post("/radio/:radioId", createStation);

router.put("/:id", updateStation);

router.delete("/:id", deleteStation);

export default router;
