/* eslint-disable require-jsdoc */
const station = {
  name: "Cadena COPE Pontevedra",
  url: "https://wecast-b03-01.flumotion.com/copesedes/pontevedra.mp3",
  country: "64c705b9a683fad78f96ee8a",
  location: {
    latitude: 0,
    longitude: 0,
    _id: "64dac2f6ea58c82d202209bf",
  },
  _id: "64d4156e309fd667c811d0fd",
  createdAt: "2023-08-09T22:38:38.404Z",
  updatedAt: "2023-08-09T22:38:38.404Z",
};

import { Transform } from "stream";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import axios from "axios";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Custom Transform stream to write data to disk and renew files
class RenewingFileStream extends Transform {
  constructor(filename, dataFolderPath) {
    super();
    this.filename = filename;
    this.filePath = path.join(dataFolderPath, this.filename);
    this.maxRetentionTime = 5 * 60 * 1000; // 5 minutes in milliseconds
    this.startTime = Date.now();
    this.fileStream = null;

    this.createFileStream();
  }

  async createFileStream() {
    this.fileStream = fs.createWriteStream(this.filePath, { flags: "a" });
  }

  async _transform(chunk, encoding, callback) {
    try {
      if (Date.now() - this.startTime > this.maxRetentionTime) {
        await this.createFileStream();
        this.startTime = Date.now();
      }

      this.fileStream.write(chunk, encoding);
      callback();
    } catch (error) {
      callback(error);
    }
  }

  async _flush(callback) {
    try {
      this.fileStream.end();
      callback();
    } catch (error) {
      callback(error);
    }
  }
}

const getStream = async (url) => {
  try {
    const response = await axios.get(url, { responseType: "stream" });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

import Readable from "stream";

const initCachedStreams = async () => {
  try {
    const dataFolderPath = path.join(
      __dirname,
      "..",
      "data_bufers",
      station._id
    );

    // Create the data folder if it doesn't exist
    if (!fs.existsSync(dataFolderPath)) fs.mkdirSync(dataFolderPath);

    console.log(`Listening stream ${station._id} on ${station.url}`.magenta);
    const stream = await getStream(station.url);

    stream.on("data", (data) => {
      //   // Create a readable stream from the audioData
      //   const audioStream = new Readable({
      //     read() {
      //       this.push(stream);
      //       this.push(null);
      //     },
      //   });
      //   // Create a filename based on the current timestamp
      //   const filename = `${Date.now()}.pcm`;
      //   // Create a RenewingFileStream instance
      //   const renewingFileStream = new RenewingFileStream(
      //     filename,
      //     dataFolderPath
      //   );
      //   // Pipe the audio stream through the RenewingFileStream
      //   audioStream.pipe(renewingFileStream);
    });
  } catch (error) {
    console.error(error);
  }
};

export { initCachedStreams };
