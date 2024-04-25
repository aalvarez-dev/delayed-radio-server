import { StationModel } from "../models/station.js";
import { RadioModel } from "../models/radio.js";

const getDelayedStream = async (req, res) => {
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

export { getDelayedStream };
