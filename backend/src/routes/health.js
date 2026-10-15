import { Router } from "express";

export const healthRouter = Router();

healthRouter.get("/", (_req, res) => {
  res.json({
    status: "ok",
    version:5,
    timestamp: new Date().toISOString(),
  });
});
