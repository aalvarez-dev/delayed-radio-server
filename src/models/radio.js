import mongoose from "../config/database.js";
import { StationModel } from "./station.js";

const radioSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    logo: { type: String, required: true },
    location: {
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
    },
    stations: [StationModel],
  },
  {
    timestamps: true,
  }
);

const RadioModel = mongoose.model("Radio", radioSchema);
export { RadioModel };
