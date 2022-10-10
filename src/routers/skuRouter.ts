import { Router } from "express";
import {
  deleteSku,
  getSkuById,
  postSku,
  putSku,
} from "../controllers/skuController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { skuSchema } from "../schemas/skuSchema";

const skuRouter = Router();

skuRouter.use(authMiddleware);

skuRouter.get("/skus/:id", getSkuById);
skuRouter.post("/skus/:id_survey", validateSchemaMiddleware(skuSchema), postSku);
skuRouter.put("/skus/:id", validateSchemaMiddleware(skuSchema), putSku);
skuRouter.delete("/skus/:id", deleteSku);

export default skuRouter;
