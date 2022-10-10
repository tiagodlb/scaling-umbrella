import * as surveyRepository from "../repositories/surveyRepository";
import {
  TCreateSurvey,
  TUpdateSurvey,
} from "../repositories/surveyRepository";
import { notFoundError } from "../utils/errorUtils";

async function getAllSurveys(id_user: string) {
  const surveys = await surveyRepository.getSurveyByUser(id_user);
  if (!surveys) return notFoundError("There is no survey");
  return surveys;
}

async function getSurveyById(id: string) {
  const survey = await surveyRepository.getSurveyById(id);
  if (!survey) return notFoundError("Survey not found");
  return survey;
}

async function createSurvey(data: TCreateSurvey) {
  const survey = await surveyRepository.createSurvey(data);
  return survey;
}

async function updateSurvey(data: TUpdateSurvey, id: string) {
  const survey = await surveyRepository.getSurveyById(id);
  if (!survey) return notFoundError("Survey does not exist");
  const updatedSurvey = await surveyRepository.updateSurvey(data, id);
  if (!updatedSurvey)
    return notFoundError(
      "Something went wrong when trying to update the survey"
    );

  return updatedSurvey;
}

async function deleteSurvey(id: string) {
  const survey = await surveyRepository.getSurveyById(id);
  if (!survey) return notFoundError("Survey does not exist");
  await surveyRepository.deleteSurvey(id);

  return;
}

export {
  updateSurvey,
  createSurvey,
  getSurveyById,
  getAllSurveys,
  deleteSurvey,
};
