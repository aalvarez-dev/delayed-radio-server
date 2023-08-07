import express from "express";
// eslint-disable-next-line new-cap
const router = express.Router();

import {
  getRadios,
  getRadio,
  // getRadioByStation,
  createRadio,
  updateRadio,
  deleteRadio,
} from "../controllers/radios.js";

router.get("/", getRadios);

router.get("/:radioID", getRadio);

// router.get("/api/:stationID/radio", getRadioByStation);

router.post("/", createRadio);

router.put("/:radioID", updateRadio);

router.delete("/:radioID", deleteRadio);

export default router;
