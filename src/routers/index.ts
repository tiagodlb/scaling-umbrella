import { Router } from "express";
import authRouter from "./auth-router";
import skuRouter from "./sku-router";
import surveyRouter from "./survey-router";
import userRouter from "./user-router";

const router = Router();

router.use(userRouter);
router.use(authRouter);
router.use(surveyRouter);
router.use(skuRouter);

export default router;
