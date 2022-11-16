import joi from "joi";

export const userCreateSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(2).max(30).required(),
  confirmPassword: joi.string().required().valid(joi.ref("password")),
});
