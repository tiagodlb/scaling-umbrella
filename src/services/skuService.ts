import { TCreateSku } from "../repositories/skuRepository.js";
import * as skuRepository from "../repositories/skuRepository";
import { notFoundError } from "../utils/errorUtils";

async function getSkuById(id: string) {
  const sku = await skuRepository.getSkuById(id);
  if (!sku) return notFoundError("Sku not found");
  return sku;
}

async function createSku(data: TCreateSku) {
  const survey = await skuRepository.createSku(data);
  return survey;
}

async function updateSku(data: skuRepository.TUpdateSku, id: string) {
  const sku = await skuRepository.getSkuById(id);
  if (!sku) return notFoundError("Sku does not exist");
  const updatedSku= await skuRepository.updateSku(data, id);
  if (!updatedSku)
    return notFoundError(
      "Something went wrong when trying to update the Sku"
    );

  return updatedSku;
}

async function deleteSku(id: string) {
  const sku = await skuRepository.getSkuById(id);
  if (!sku) return notFoundError("Sku not found");
  await skuRepository.deleteSku(id);

  return;
}

export {
  updateSku,
  createSku,
  getSkuById,
  deleteSku,
};
