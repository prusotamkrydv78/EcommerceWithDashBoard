import slugify from "slugify";
import ProductModels from "../models/ProductModels.js";
import fs from "fs";
export const createProductControllers = async (req, res) => {
    res.send(req.fields)
  try {
    const { name, description, price, category } = req.fields;
    const { photo } = req.files;

    switch (true) {
      case !name:
        return res.status(500).send({ error: "name is required" });
      case !description:
        return res.status(500).send({ error: "description is required" });
      case !price:
        return res.status(500).send({ error: "price is required" });
      case !category:
        return res.status(500).send({ error: "category is required" });
      case photo && photo.size > 100000:
        return res
          .status(500)
          .send({ error: "Photo is required less than 1mb" });
    }
    const products = new ProductModels({ ...req.fields, slug: slugify(name) });

    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }
    await products.save();
    res.status(200).send({
      success: true,
      message: "Product created Successfully",

      products,
    });
  } catch (error) {
    console.log(error)
    res.send({
      success: false,
      message: "Error at creating product",
      error,
    });
  }
};
