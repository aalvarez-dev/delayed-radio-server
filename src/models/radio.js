import mongoose from "../config/database.js";
import { stationSchema } from "./station.js";

const radioSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    logo: { type: String, required: true },
    stations: [stationSchema],
  },
  {
    timestamps: true,
  }
);

const RadioModel = mongoose.model("Radio", radioSchema);
export { RadioModel, radioSchema };
