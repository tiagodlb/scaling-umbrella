import joi from "joi";

export const surveySchema = joi.object({
  name: joi.string().min(5).max(100).required(),
  description: joi.string().default("").optional().allow(""),
});
