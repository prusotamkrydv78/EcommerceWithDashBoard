import express from "express";
// createCategoryControllers
const router = express.Router();

import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
import {
  categoryControllers,
  createCategoryControllers,
  deleteCategory,
  singleCategory,
  updateCategoryControllers,
} from "../controllers/createCategoryControllers.js";
import CategoryModel from "../models/CategoryModel.js";
// routes

router.post(
  "/createcategory",
  isAdmin,
  requireSignIn,
  createCategoryControllers,
  (req, res) => {
    res.send({
      message: "hlo",
    });
  }
);

// update Category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryControllers
);

// get alll category

router.get("/getcategory", categoryControllers);

// single categoyr

router.get("/singlecategory/:slug", singleCategory);

// delete
router.delete("/deletecategory/:id", requireSignIn, isAdmin, deleteCategory);

export default router;
