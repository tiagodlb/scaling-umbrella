import { Router } from "express";
import { postAuthenticate } from "../controllers/auth-controller";
import { validateBody } from "../middlewares/validate-schema-middleware";
import { authSchema } from "../schemas/authSchema";

const authRouter = Router();

authRouter.post(
  "/auth/login",
  validateBody(authSchema),
  postAuthenticate
);

export default authRouter;
