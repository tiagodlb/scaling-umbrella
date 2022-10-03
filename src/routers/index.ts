import { Router } from "express";
import authRouter from "./authRouter.js";
import surveyRouter from "./surveyRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(userRouter);
router.use(authRouter);
router.use(surveyRouter);

export default router;
