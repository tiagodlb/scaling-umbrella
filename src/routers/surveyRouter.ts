import { Router } from "express";
import {
  deleteSurvey,
  getSurveyById,
  getSurveys,
  postSurvey,
  putSurvey,
} from "../controllers/surveyController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { surveySchema } from "../schemas/surveySchema";

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
