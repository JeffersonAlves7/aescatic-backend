import { Router, Express } from "express";

// Import the controller
import ProductsRouter from "./ProductsRouter";

const routes = Router();

const allRoutes = [ProductsRouter];
allRoutes.forEach((r) => r(routes));

export default routes;
