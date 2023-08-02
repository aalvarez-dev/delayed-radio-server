import * as mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;

const connectToDatabase = async () => {
  try {
    const url = process.env.MONGO_URI;
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    console.log(`Sucessfully connected to the database`.green);
    return client.db();
  } catch (error) {
    console.error(`Error connecting to the database: ${error}`.red);
    throw error;
  }
};

export { connectToDatabase };
