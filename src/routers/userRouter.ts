import { Router } from "express";
import { getUserById, postUser } from "../controllers/userController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { userCreateSchema } from "../schemas/userSchema.js";

const userRouter = Router();

userRouter.get("/users/:id", getUserById);
userRouter.post("/users", validateSchemaMiddleware(userCreateSchema), postUser);

export default userRouter;
