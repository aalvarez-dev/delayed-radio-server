import { Schema, model } from "mongoose";

import { locationSchema } from "./location.js";

const countryCodeRegexp = /^[A-Za-z]{2}$/;

const countrySchema = new Schema(
  {
    name: { type: String, unique: true, required: [true, "Name is required"] },
    countryCode: {
      type: String,
      unique: true,
      validate: {
        validator: (v) => countryCodeRegexp.test(v),
        message: (props) => `${props.value} is not a valid country code!`,
      },
      required: [true, "Country code is required"],
    },
    location: locationSchema,
  },
  {
    timestamps: true,
  }
);

const CountryModel = model("Country", countrySchema);
export { CountryModel, countrySchema };
