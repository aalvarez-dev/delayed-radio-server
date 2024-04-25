import mongoose from "mongoose";

// mongoose.set("debug", true);

const connectToDatabase = async () => {
  const mongoUrl = process.env.MONGO_URI;
  mongoose.connect(mongoUrl).then(
      () => { console.log(`Sucessfully connected to the database`.green); },
      err => {console.error(`Error connecting to the database: ${err}`.red); }
    );
};

export { connectToDatabase };
