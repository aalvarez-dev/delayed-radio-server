import { Schema } from "mongoose";

const coordiatesRegexp =
  /^-?([0-9]|[1-8][0-9]|90)\.\d{1,6},\s?-?([0-9]|[1-9][0-9]|1[0-7][0-9]|180)\.\d{1,6}$/;

const locationSchema = new Schema({
  latitude: {
    type: Number,
    validate: {
      validator: (v) => coordiatesRegexp.test(v),
      message: (props) => `${props.value} is not a valid latitude!`,
    },
    required: [true, "Location latitude is required"],
  },
  longitude: {
    type: Number,
    validate: {
      validator: (v) => coordiatesRegexp.test(v),
      message: (props) => `${props.value} is not a valid longitude!`,
    },
    required: [true, "Location longitude is required"],
  },
});

export { locationSchema };
