import express from "express";
// eslint-disable-next-line new-cap
const router = express.Router();

import {
  getCountries,
  getCountry,
  createCountry,
  updateCountry,
  deleteCountry,
} from "../controllers/countries.js";

router.get("/", getCountries);

router.get("/:id", getCountry);

router.post("/", createCountry);

router.put("/:id", updateCountry);

router.delete("/:id", deleteCountry);

export default router;
