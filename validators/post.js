const Joi = require('joi');
const Boom = require('@hapi/boom');
const obj = {};

const createSchema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  description: Joi.string().min(10),
  content: Joi.string().min(10).required()
});
const editSchema = Joi.object({
  _id: Joi.string().required(),
  title: Joi.string().min(3).max(30).required(),
  description: Joi.string().min(10),
  content: Joi.string().min(10).required()
});

obj.create = (req, res, next) => {
  const result = createSchema.validate(req.body);
  if(result && result.error) {
    const {output} = Boom.badRequest(result.error.message);
    return res.status(output.statusCode).json(output);
  }
  return next();
};

obj.edit = (req, res, next) => {
  const result = editSchema.validate(req.body);
  if(result && result.error) {
    const {output} = Boom.badRequest(result.error.message);
    return res.status(output.statusCode).json(output);
  }
  return next();
};

module.exports = obj;