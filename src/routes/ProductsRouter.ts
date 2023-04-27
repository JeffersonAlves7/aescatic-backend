import { Router } from "express";
import ProductsModel from "../models/ProductsModel";
import { sequelize } from "../database";

const route = Router();

route.get("/all", async (req, res) => {
  await sequelize.sync();
  const products = await ProductsModel.findAll();
  res.send(products);
});

route.post("/create", async (req, res) => {
  const { name, category, description, price } = <ProductsModel>req.body;

  const productCreated = await ProductsModel.create({
    name,
    category,
    description,
    price,
  });

  res.send(productCreated);
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

export default (r: Router) => r.use("/products", route);
