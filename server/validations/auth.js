/* eslint-disable no-undef */
import Joi from 'joi';

exports = {
  register: {
    body: {
      email: Joi.string().email().required(),
      name: Joi.string().required(),
      password: Joi.string().required().min(6).max(126),
    },
  },
};
