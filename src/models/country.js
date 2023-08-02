import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const countrySchema = new Schema(
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

const Country = mongoose.model("Country", countrySchema);
export { Country };

// // country example
// const country = {
//   name: "España",
//   countryCode: "ES",
//   location: {
//     latitude: 40.416775,
//     longitude: -3.70379,
//   },
// };
