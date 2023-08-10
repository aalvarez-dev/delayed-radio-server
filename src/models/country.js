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
export { CountryModel, countrySchema };
