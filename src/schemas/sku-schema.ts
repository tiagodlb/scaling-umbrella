import joi from "joi";

export const skuSchema = joi.object({
  sku: joi.string().required(),
  displayName: joi.string().required(),
  price: joi.number().required(),
  currencyCode: joi.string().required(),
  unit: joi.string().required(),
});
