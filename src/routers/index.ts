import { Router } from "express";
import authRouter from "./authRouter.js";
import skuRouter from "./skuRouter.js";
import surveyRouter from "./surveyRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(userRouter);
router.use(authRouter);
router.use(surveyRouter);
router.use(skuRouter);

export default router;
