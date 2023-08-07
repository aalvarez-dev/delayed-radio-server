import mongoose from "../config/database.js";

const countrySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    countryCode: { type: String, required: true },
    location: {
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
    },
  },
  {
    timestamps: true,
  }
);

const CountryModel = mongoose.model("Country", countrySchema);
export { CountryModel };

// // country example
// const country = {
//   name: "España",
//   countryCode: "ES",
//   location: {
//     latitude: 40.416775,
//     longitude: -3.70379,
//   },
// };
