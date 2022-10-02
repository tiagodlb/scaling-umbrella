import * as surveyRepository from "../repositories/surveyRepository.js";
import {
  TCreateSurvey,
  TUpdateSurvey,
} from "../repositories/surveyRepository.js";
import { notFoundError } from "../utils/errorUtils.js";

async function getAllSurveys(id_user: string) {
  const surveys = await surveyRepository.getSurveyByUser(id_user);
  if (!surveys) return notFoundError("There is no survey");
  return surveys;
}

async function getSurveyById(id: string) {
  const survey = await surveyRepository.getSurveyById(id);
  if (survey) return notFoundError("Survey not found");
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
  if (!survey)
    return notFoundError(
      "Something went wrong when trying to update the survey"
    );

  return updatedSurvey;
}

async function deleteSurvey(id_user: string,id: string) {
  const user = await surveyRepository.getSurveyByUser(id_user);
  if (!user) return notFoundError("User does not exist");
  const survey = await surveyRepository.getSurveyById(id);
  if (!survey) return notFoundError("Survey does not exist");
  await surveyRepository.deleteSurvey(id);
  return;
}

export { updateSurvey, createSurvey, getSurveyById, getAllSurveys, deleteSurvey };
