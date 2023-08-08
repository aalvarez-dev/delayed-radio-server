import mongoose from "../config/database.js";

const stationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    url: { type: String, required: true },
    country: { type: String, required: true },
    location: {
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
    },
  },
  {
    timestamps: true,
  }
);

const StationModel = mongoose.model("Station", stationSchema);
export { StationModel };
