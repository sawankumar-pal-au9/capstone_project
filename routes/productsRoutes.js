import express from "express";
import { getProducts, addNew, getProductsByName, getProdsByCategory, addMultiple } from "../controllers/productsController.js";

const productsRouter = express.Router();

productsRouter.post('/', addNew);
productsRouter.post('/mult', addMultiple);
productsRouter.get('/', getProducts);
// productsRouter.get('/:product', getProductsByName);
productsRouter.get('/category', getProdsByCategory);

export default productsRouter;