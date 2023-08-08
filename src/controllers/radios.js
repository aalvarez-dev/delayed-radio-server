import { RadioModel } from "../models/radio.js";

const getRadios = async (req, res) => {
  try {
    const radios = await RadioModel.find();
    res.json(radios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRadio = async (req, res) => {
  try {
    const radio = await RadioModel.findById(req.params.id);
    if (!radio) return res.status(404).json({ error: "Radio not found" });
    res.json(radio);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch radio" });
  }
};

const getRadioByStation = async (req, res) => {
  try {
    const radio = await RadioModel.findOne({
      "stations._id": req.params.stationId,
    });
    if (!radio) return res.status(404).json({ error: "Radio not found" });
    res.json(radio);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch radio" });
  }
};

const createRadio = async (req, res) => {
  try {
    const radio = new RadioModel(req.body);
    await radio.save();
    res.status(201).json(radio);
  } catch (error) {
    res.status(400).json({ error: "Failed to create radio" });
  }
};

const updateRadio = async (req, res) => {
  try {
    const updatedRadio = await RadioModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRadio)
      return res.status(404).json({ error: "Radio not found" });
    res.json(updatedRadio);
  } catch (error) {
    res.status(400).json({ error: "Failed to update radio" });
  }
};

const deleteRadio = async (req, res) => {
  try {
    const deletedRadio = await RadioModel.findByIdAndDelete(req.params.id);
    if (!deletedRadio)
      return res.status(404).json({ error: "Radio not found" });
    res.json({ message: "Radio deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete radio" });
  }
};

export {
  getRadios,
  getRadio,
  getRadioByStation,
  createRadio,
  updateRadio,
  deleteRadio,
};
