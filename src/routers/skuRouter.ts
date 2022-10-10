import { Router } from "express";
import {
  deleteSku,
  getSkuById,
  postSku,
  putSku,
} from "../controllers/skuController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { skuSchema } from "../schemas/skuSchema.js";

const skuRouter = Router();

skuRouter.use(authMiddleware);

skuRouter.get("/skus/:id", getSkuById);
skuRouter.post("/skus/:id_survey", validateSchemaMiddleware(skuSchema), postSku);
skuRouter.put("/skus/:id", validateSchemaMiddleware(skuSchema), putSku);
skuRouter.delete("/skus/:id", deleteSku);

export default skuRouter;
