import express from 'express';
import { getSubCategories, allSubcategories } from '../controllers/subCategoryController.js';
import subCategory from '../model/subCategoryModel.js';

const subCategoryRouter = express.Router();

subCategoryRouter.get('/:categoryNumber', getSubCategories);
subCategoryRouter.get('/', allSubcategories);

export default subCategoryRouter;