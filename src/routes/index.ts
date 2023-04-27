import { Router, Express } from "express";

// Import the controller
import ProductsRouter from "./ProductsRouter";

const route = Router();

const routes = [ProductsRouter];
routes.forEach((r) => r(route));

export default (app: Express) => app.use("/api", route);
