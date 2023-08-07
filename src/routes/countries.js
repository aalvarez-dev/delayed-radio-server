import express from "express";
// eslint-disable-next-line new-cap
const router = express.Router();

import {
  getCountries,
  // getCountry,
  // createCountry,
  // updateCountry,
  // deleteCountry,
} from "../controllers/countries.js";

router.get("/", getCountries);

// router.get("/:countryID", getCountry);

// router.post("/", createCountry);

// router.put("/:countryID", updateCountry);

// router.delete("/:countryID", deleteCountry);

export default router;
