import { Request, Response } from "express";
import * as surveyService from "../services/surveyService.js";

export async function getSurveys(req: Request, res: Response) {
  const { id_user } = res.locals;

  const data = await surveyService.getAllSurveys(id_user);

  res.status(200).json(data);
}

export async function getSurveyById(req: Request, res: Response) {
  const { id } = req.params;

  const data = await surveyService.getSurveyById(id);

  res.status(200).json(data);
}

export async function postSurvey(req: Request, res: Response) {
  const { id_user } = res.locals;

  const survey = req.body;

  const data = await surveyService.createSurvey({
    id_user: id_user,
    ...survey,
  });

  res.status(201).json(data);
}

export async function putSurvey(req: Request, res: Response) {
  const id: string = req.params.id;
  const survey = req.body;

  const data = await surveyService.updateSurvey(survey, id);

  res.status(200).json(data);
}

export async function deleteSurvey(req: Request, res: Response) {
  const id: string = req.params.id;

  await surveyService.deleteSurvey(id);

  res.sendStatus(204);
}
