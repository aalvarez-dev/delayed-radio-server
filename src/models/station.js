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

// station example
// const station = {
//   name: "Cadena COPE Pontevedra",
//   url: "https://wecast-b03-01.flumotion.com/copesedes/pontevedra.mp3",
//   country: {
//     $oid: "64c705b9a683fad78f96ee8a",
//   },
//   location: {
//     latitude: 0,
//     longitude: 0,
//   },
// };
