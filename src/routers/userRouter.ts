import { Router } from "express";
import { getUserById, postUser } from "../controllers/userController";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { userCreateSchema } from "../schemas/userSchema";

const userRouter = Router();

userRouter.get("/users/:id", getUserById);
userRouter.post("/users", validateSchemaMiddleware(userCreateSchema), postUser);

export default userRouter;
