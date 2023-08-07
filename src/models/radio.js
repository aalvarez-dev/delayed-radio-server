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

// radio example
// const radio = {
//   name: "Cadena COPE",
//   logo: "svg",
//   stations: [
//     {
//       name: "Cadena COPE Pontevedra",
//       url: "https://wecast-b03-01.flumotion.com/copesedes/pontevedra.mp3",
//       country: {
//         $oid: "64c705b9a683fad78f96ee8a",
//       },
//       location: {
//         latitude: 0,
//         longitude: 0,
//       },
//     },
//   ],
// };
