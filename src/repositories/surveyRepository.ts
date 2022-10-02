import { Surveys } from "@prisma/client";
import { prisma } from "../database/prisma.js";

export type ICreateSurvey = Omit<Surveys, "id">;

export async function getSurveyById(id: string): Promise<Surveys | null> {
  return await prisma.surveys.findUnique({
    where: { id },
  });
}

export async function getSurveyByUser(userId: string): Promise<Surveys[]>{
    return await prisma.surveys.findMany({
        where: { id_user: userId }
    })
}
