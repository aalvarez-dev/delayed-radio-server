import { Schema, model } from "mongoose";

import { stationSchema } from "./station.js";

const radioSchema = new Schema(
  {
    name: { type: String, unique: true, required: [true, "Name is required"] },
    logo: { type: String },
    stations: [stationSchema],
  },
  {
    timestamps: true,
  }
);

const RadioModel = model("Radio", radioSchema);
export { RadioModel, radioSchema };
