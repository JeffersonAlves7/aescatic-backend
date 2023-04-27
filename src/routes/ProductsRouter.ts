import { Router } from "express";
import ProductsModel from "../models/ProductsModel";

const route = Router();

route.get("/all", async (req, res) => {
  const products = await ProductsModel.findAll();
  res.send(products);
});

route.post("/create", async (req, res) => {
  try {
    const { name, category, price } = <ProductsModel>req.body;

    if (!name || !price || !category)
      return res.status(500).send("Requires a name, price and category");

    const productCreated = await ProductsModel.create(req.body);
    res.send(productCreated);
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
});

route.delete("/delete", async (req, res) => {
  const { id } = <ProductsModel>req.body;
  const productsDestroied = await ProductsModel.destroy({
    where: {
      id,
    },
  });
  res.send(productsDestroied);
});

route.get("/category/:category", async (req, res) => {
  try {
    const { category } = <ProductsModel>req.params;
    if (!category)
      return res.status(500).send("Requires a name, price and category");
    const products = await ProductsModel.findAll({ where: { category } });
    res.send(products);
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server Error");
  }
});

export default (r: Router) => r.use("/products", route);
