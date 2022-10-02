import { Surveys } from "@prisma/client";
import { prisma } from "../database/prisma.js";

export type TCreateSurvey = Omit<Surveys, "id" | "created_at">;
export type TUpdateSurvey = Partial<Surveys>;

export async function getSurveyById(id: string): Promise<Surveys | null> {
  return await prisma.surveys.findUnique({
    where: { id },
  });
}

export async function getSurveyByUser(userId: string): Promise<Surveys[]> {
  return await prisma.surveys.findMany({
    where: { id_user: userId },
  });
}

export async function createSurvey({
  id_user,
  name,
  description,
}: TCreateSurvey): Promise<Surveys> {
  return await prisma.surveys.create({
    data: { id_user, name, description },
  });
}

export async function updateSurvey(
  survey: TUpdateSurvey,
  id: string
): Promise<Surveys> {
  return await prisma.surveys.update({
    where: { id },
    data: survey,
  });
}
