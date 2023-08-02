// Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config();

// To colorize the console output
import * as colors from "colors";

import { connectToDatabase } from "./config/database.js";

const db = await connectToDatabase();
console.log(db);
