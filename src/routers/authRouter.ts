import { Router } from "express";
import { postAuthenticate } from "../controllers/authController";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { authSchema } from "../schemas/authSchema";

const authRouter = Router();

authRouter.post(
  "/auth/login",
  validateSchemaMiddleware(authSchema),
  postAuthenticate
);

export default authRouter;
