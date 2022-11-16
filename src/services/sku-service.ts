import { TCreateSku } from "../repositories/sku-repository.js";
import * as skuRepository from "../repositories/sku-repository.js";
import { notFoundError } from "../errors/not-found-error.js";

async function getSkuById(id: string) {
  const sku = await skuRepository.getSkuById(id);
  if (!sku) throw notFoundError();
  return sku;
}

async function createSku(data: TCreateSku) {
  const survey = await skuRepository.createSku(data);
  return survey;
}

async function updateSku(data: skuRepository.TUpdateSku, id: string) {
  const sku = await skuRepository.getSkuById(id);
  if (!sku) throw notFoundError();
  const updatedSku = await skuRepository.updateSku(data, id);
  if (!updatedSku){
    throw notFoundError();
  }

  return updatedSku;
}

async function deleteSku(id: string) {
  const sku = await skuRepository.getSkuById(id);
  if (!sku) throw notFoundError();
  await skuRepository.deleteSku(id);

  return;
}

export {
  updateSku,
  createSku,
  getSkuById,
  deleteSku,
};
