import mongoose from "../config/database.js";
import StationModel from "./station";

const radioSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    logo: { type: String, required: true },
    stations: { type: String, required: true },
    location: [StationModel],
  },
  {
    timestamps: true,
  }
);

const RadioModel = mongoose.model("Radio", radioSchema);
export { RadioModel };
