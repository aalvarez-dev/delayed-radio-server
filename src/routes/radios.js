import express from "express";
// eslint-disable-next-line new-cap
const router = express.Router();

import {
  getRadios,
  getRadio,
  getRadioByStation,
  createRadio,
  updateRadio,
  deleteRadio,
} from "../controllers/radios.js";

router.get("/", getRadios);

router.get("/:id", getRadio);

router.get("/station/:stationId", getRadioByStation);

router.post("/", createRadio);

router.put("/:id", updateRadio);

router.delete("/:id", deleteRadio);

export default router;
