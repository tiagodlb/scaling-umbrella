import { Router } from "express";
import { getUserById, postUser } from "../controllers/user-controller";
import { validateBody } from "../middlewares/validate-schema-middleware";
import { userCreateSchema } from "../schemas/userSchema";

const userRouter = Router();

userRouter.get("/users/:id", getUserById);
userRouter.post("/users", validateBody(userCreateSchema), postUser);

export default userRouter;
