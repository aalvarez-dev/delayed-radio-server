import express from "express";
// eslint-disable-next-line new-cap
const router = express.Router();

import { getDelayedStream } from "../controllers/streams.js";

router.get("/station/:stationId/delayed/:delayInSeconds", getDelayedStream);

export default router;
