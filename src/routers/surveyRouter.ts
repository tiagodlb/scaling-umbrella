import { Router } from "express";
import {
  deleteSurvey,
  getSurveyById,
  getSurveys,
  postSurvey,
  putSurvey,
} from "../controllers/surveyController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { surveySchema } from "../schemas/surveySchema.js";

const surveyRouter = Router();

surveyRouter.use(authMiddleware);

surveyRouter.get("/surveys", getSurveys);
surveyRouter.get("/surveys/:id", getSurveyById);
surveyRouter.post(
  "/surveys",
  validateSchemaMiddleware(surveySchema),
  postSurvey
);
surveyRouter.put(
  "/surveys/:id",
  validateSchemaMiddleware(surveySchema),
  putSurvey
);
surveyRouter.delete("/surveys/:id", deleteSurvey);

export default surveyRouter;
