import { Sku } from "@prisma/client";
import { prisma } from "../database/prisma";

export type TCreateSku = Omit<Sku, "id">;
export type TUpdateSku = Partial<Sku>;

export async function getSkuById(id: string): Promise<Sku | null> {
  return await prisma.sku.findUnique({
    where: { id },
  });
}

export async function getSkuBySurvey(id_survey: string): Promise<Sku[]> {
  return await prisma.sku.findMany({
    where: { id_survey: id_survey },
  });
}

export async function createSku({
  id_survey,
  sku,
  displayName,
  price,
  currencyCode,
  unit,
}: TCreateSku): Promise<Sku> {
  return await prisma.sku.create({
    data: { id_survey, sku, displayName, price, currencyCode, unit },
  });
}

export async function updateSku(survey: TUpdateSku, id: string): Promise<Sku> {
  return await prisma.sku.update({
    where: { id },
    data: survey,
  });
}

export async function deleteSku(id: string) {
  return await prisma.sku.delete({
    where: { id },
  });
}
