import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
import { createProductControllers } from "../controllers/productControllers.js";
import ExpressFormidable from "express-formidable";

const router = express.Router();

router.post(
  "/createproduct",
  requireSignIn,
  isAdmin,
  express(),
  createProductControllers
);

export default router;
