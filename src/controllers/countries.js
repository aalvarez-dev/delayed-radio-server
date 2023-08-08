import { CountryModel } from "../models/country.js";

const getCountries = async (req, res) => {
  try {
    const countries = await CountryModel.find();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCountry = async (req, res) => {
  try {
    const country = await CountryModel.findById(req.params.id);
    if (!country) return res.status(404).json({ error: "Country not found" });
    res.json(country);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch country" });
  }
};

const createCountry = async (req, res) => {
  try {
    const country = new CountryModel(req.body);
    await country.save();
    res.status(201).json(country);
  } catch (error) {
    res.status(400).json({ error: "Failed to create country" });
  }
};

const updateCountry = async (req, res) => {
  try {
    const updatedCountry = await CountryModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCountry)
      return res.status(404).json({ error: "Country not found" });
    res.json(updatedCountry);
  } catch (error) {
    res.status(400).json({ error: "Failed to update country" });
  }
};

const deleteCountry = async (req, res) => {
  try {
    const deletedCountry = await CountryModel.findByIdAndDelete(req.params.id);
    if (!deletedCountry)
      return res.status(404).json({ error: "Country not found" });
    res.json({ message: "Country deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete country" });
  }
};

export {
  getCountries,
  getCountry,
  createCountry,
  updateCountry,
  deleteCountry,
};
