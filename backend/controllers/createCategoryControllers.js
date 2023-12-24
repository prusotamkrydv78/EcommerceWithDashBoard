import CategoryModel from "../models/CategoryModel.js";
import slugify from "slugify";

export const createCategoryControllers = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }
    const exitingCategory = await CategoryModel.findOne({ name });
    if (exitingCategory) {
      return res.status(200).send({
        success: true,
        message: "Category Already Exists",
      });
    }
    const category = await new CategoryModel({
      name,
      slug: slugify(name),
    }).save();
    res.status(200).send({
      success: true,
      message: "New Category Created",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Category",
    });
  }
};
export const updateCategoryControllers = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await CategoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Category updated sucessfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error whiile uptading caterogy",
    });
  }
};

export const categoryControllers = async (req, res) => {
  try {
    const category = await CategoryModel.find({});
    res.status(200).send({
      success: true,
      message: "All category list",
      category,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "Error in categoryconrollers",
    });
  }
};

// sinlge category
export const singleCategory = async (req, res) => {
  try {
    const { slug } = req.params;
    const category = await CategoryModel.findOne({ slug });
    res.status(200).send({
      success: true,
      message: "single cateogr is",
      category,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "error at single cateogry",
    });
  }
};

// delete
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await CategoryModel.findByIdAndDelete({ id });
    res.status(200).send({
      message: "category deleted successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error while deleting categroy",
      error,
    });
  }
};
