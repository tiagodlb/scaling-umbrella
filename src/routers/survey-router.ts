import { Router } from "express";
import {
  deleteSurvey,
  getSurveyById,
  getSurveys,
  postSurvey,
  putSurvey,
} from "../controllers/survey-controller.js";
import { authenticateToken } from "../middlewares/auth-middleware.js";
import { validateBody } from "../middlewares/validate-schema-middleware.js";
import { surveySchema } from "../schemas/survey-schema.js";

const surveyRouter = Router();

surveyRouter.all('/*', authenticateToken);

surveyRouter.get("/surveys", getSurveys);
surveyRouter.get("/surveys/:id", getSurveyById);
surveyRouter.post(
  "/surveys",
  validateBody(surveySchema),
  postSurvey
);
surveyRouter.put(
  "/surveys/:id",
  validateBody(surveySchema),
  putSurvey
);
surveyRouter.delete("/surveys/:id", deleteSurvey);

export default surveyRouter;
