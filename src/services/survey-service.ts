import { notFoundError } from "../errors/not-found-error.js";
import * as surveyRepository from "../repositories/survey-repository.js";
import {
  TCreateSurvey,
  TUpdateSurvey,
} from "../repositories/survey-repository.js";

async function getAllSurveys(id_user: string) {
  const surveys = await surveyRepository.getSurveyByUser(id_user);
  if (!surveys) throw notFoundError();
  return surveys;
}

async function getSurveyById(id: string) {
  const survey = await surveyRepository.getSurveyById(id);
  if (!survey) throw notFoundError();
  return survey;
}

async function createSurvey(data: TCreateSurvey) {
  const survey = await surveyRepository.createSurvey(data);
  return survey;
}

async function updateSurvey(data: TUpdateSurvey, id: string) {
  const survey = await surveyRepository.getSurveyById(id);
  if (!survey) throw notFoundError();
  const updatedSurvey = await surveyRepository.updateSurvey(data, id);
  if (!updatedSurvey) {
    throw notFoundError();

  }

  return updatedSurvey;
}

async function deleteSurvey(id: string) {
  const survey = await surveyRepository.getSurveyById(id);
  if (!survey) throw notFoundError();
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
