import { Router } from "express";
import { postAuthenticate } from "../controllers/authController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { authSchema } from "../schemas/authSchema.js";

const authRouter = Router();

authRouter.post(
  "/auth/login",
  validateSchemaMiddleware(authSchema),
  postAuthenticate
);

export default authRouter;
