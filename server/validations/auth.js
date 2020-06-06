/* eslint-disable no-undef */
import { Joi } from 'express-validation';

const register = {
  body: Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required()
      .min(6)
      .max(126),
  }),
};

const login = {
  body: {
    email: Joi.string().email().required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required()
      .min(6)
      .max(126),
  },
};

export { register, login };
