import express from "express";
// eslint-disable-next-line new-cap
const router = express.Router();

const {
  getCountries,
  getCountry,
  createCountry,
  updateCountry,
  deleteCountry,
} = require("../controllers/countries.js");

router.get("/api/countries/", getCountries);

router.get("/api/countries/:countryID", getCountry);

router.post("/api/countries/", createCountry);

router.put("/api/countries/:countryID", updateCountry);

router.delete("/api/countries/:countryID", deleteCountry);

export { router as countriesRoutes };
