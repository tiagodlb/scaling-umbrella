import { Request, Response } from "express";
import * as skuService from "../services/skuService.js";

export async function getSkuById(req: Request, res: Response) {
  const { id } = req.params;

  const data = await skuService.getSkuById(id);
 
  res.json(data);
}

export async function postSku(req: Request, res: Response) {
  const { id_survey } = req.params;

  const sku = req.body;

  const data = await skuService.createSku({
    id_survey: id_survey,
    ...sku,
  });

  res.status(201).json(data);
}

export async function putSku(req: Request, res: Response) {
  const id: string = req.params.id;
  const sku = req.body;

  const data = await skuService.updateSku(sku, id);

  res.status(200).json(data);
}

export async function deleteSku(req: Request, res: Response) {
  const { id }= req.params;
  await skuService.deleteSku(id);

  res.sendStatus(204);
}
