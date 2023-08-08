import { StationModel } from "../models/station.js";
import { RadioModel } from "../models/radio.js";

const getStations = async (req, res) => {
  try {
    const radios = await StationModel.find();
    res.json(radios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStation = async (req, res) => {
  try {
    const station = await StationModel.findById(req.params.id);
    if (!station) return res.status(404).json({ error: "Station not found" });
    res.json(station);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch station" });
  }
};

const getStationsByRadio = async (req, res) => {
  try {
    const radio = await RadioModel.findById(req.params.radioId);
    if (!radio) return res.status(404).json({ error: "Radio not found" });
    res.json(radio.stations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stations" });
  }
};

const createStation = async (req, res) => {
  try {
    const radio = await RadioModel.findById(req.params.radioId);
    if (!radio) return res.status(404).json({ error: "Radio not found" });

    const station = new StationModel(req.body);
    radio.stations.push(station);
    await radio.save();

    res.status(201).json(station);
  } catch (error) {
    res.status(400).json({ error: "Failed to create new station on radio" });
  }
};

const updateStation = async (req, res) => {
  try {
    const updatedStation = await StationModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedStation)
      return res.status(404).json({ error: "Station not found" });
    res.json(updatedStation);
  } catch (error) {
    res.status(400).json({ error: "Failed to update station" });
  }
};

const deleteStation = async (req, res) => {
  try {
    const deletedStation = await StationModel.findByIdAndDelete(req.params.id);
    if (!deletedStation)
      return res.status(404).json({ error: "Station not found" });
    res.json({ message: "Station deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete station" });
  }
};

export {
  getStations,
  getStationsByRadio,
  getStation,
  createStation,
  updateStation,
  deleteStation,
};
