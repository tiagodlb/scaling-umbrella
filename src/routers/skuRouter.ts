import { Router } from "express";
import {
  deleteSku,
  getSkuById,
  postSku,
  putSku,
} from "../controllers/sku-controller.js";
import { authenticateToken } from "../middlewares/auth-middleware.js";
import { validateBody,  } from "../middlewares/validate-schema-middleware.js";
import { skuSchema } from "../schemas/skuSchema.js";

const skuRouter = Router();

skuRouter.all('/*', authenticateToken);

skuRouter.get("/skus/:id", getSkuById);
skuRouter.post("/skus/:id_survey", validateBody(skuSchema), postSku);
skuRouter.put("/skus/:id", validateBody(skuSchema), putSku);
skuRouter.delete("/skus/:id", deleteSku);

export default skuRouter;
