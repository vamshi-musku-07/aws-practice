import { Router } from "express";
import { env } from "../config/env.js";

export const healthRouter = Router();

healthRouter.get("/", (_req, res) => {
  res.json({
    status: "ok",
    env: env.nodeEnv,
    awsRegion: env.aws.region,
    timestamp: new Date().toISOString(),
  });
});