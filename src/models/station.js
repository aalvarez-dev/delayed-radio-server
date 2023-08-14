import { Schema, model } from "mongoose";

import { locationSchema } from "./location.js";

const stationSchema = new Schema(
  {
    name: { type: String, unique: true, required: [true, "Name is required"] },
    url: { type: String, required: [true, "Url is required"] },
    country: {
      type: Schema.Types.ObjectId,
      ref: "Country",
      required: [true, "Country is required"],
    },
    location: locationSchema,
  },
  {
    timestamps: true,
  }
);

const StationModel = model("Station", stationSchema);
export { StationModel, stationSchema };
