import { StationModel } from "../models/station.js";
import { RadioModel } from "../models/radio.js";

const getStations = async (req, res) => {
  try {
    const radios = await RadioModel.find();
    const stations = radios.map((radio) => radio.stations).flat();
    res.json(stations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStation = async (req, res) => {
  try {
    const radio = await RadioModel.findOne({
      "stations._id": req.params.id,
    });
    if (!radio) return res.status(404).json({ error: "Station not found" });
    const station = radio.stations.find(
      (station) => station._id == req.params.id
    );
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
    const updatedRadio = await RadioModel.findOneAndUpdate(
      { "stations._id": req.params.id },
      {
        $set: {
          "stations.$._id": req.body._id,
          "stations.$.name": req.body.name,
          "stations.$.url": req.body.url,
          "stations.$.country": req.body.country,
          "stations.$.location": req.body.location,
        },
      },
      { new: true }
    );
    if (!updatedRadio)
      return res.status(404).json({ error: "Station not found" });
    const updatedStation = updatedRadio.stations.find(
      (station) => station._id == (req.body._id || req.params.id)
    );
    res.json(updatedStation);
  } catch (error) {
    res.status(400).json({ error: "Failed to update station" });
  }
};

const deleteStation = async (req, res) => {
  try {
    const updatedRadio = await RadioModel.findOneAndUpdate(
      { "stations._id": req.params.id },
      { $pull: { stations: { _id: req.params.id } } },
      { new: true }
    );
    if (!updatedRadio)
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
