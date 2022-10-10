import { Router } from "express";
import authRouter from "./authRouter";
import skuRouter from "./skuRouter";
import surveyRouter from "./surveyRouter";
import userRouter from "./userRouter";

const router = Router();

router.use(userRouter);
// router.use(authRouter);
// router.use(surveyRouter);
// router.use(skuRouter);

export default router;
