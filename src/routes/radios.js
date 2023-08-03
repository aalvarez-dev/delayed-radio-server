const express = require("express");
// eslint-disable-next-line new-cap
const router = express.Router();

const {
  getRadios,
  getRadio,
  getRadioByStation,
  createRadio,
  updateRadio,
  deleteRadio,
} = require("../controllers/radios.js");

router.get("/api/radios/", getRadios);

router.get("/api/radios/:radioID", getRadio);

router.get("/api/:stationID/radio", getRadioByStation);

router.post("/api/radios/", createRadio);

router.put("/api/radios/:radioID", updateRadio);

router.delete("/api/radios/:radioID", deleteRadio);

export { router };
