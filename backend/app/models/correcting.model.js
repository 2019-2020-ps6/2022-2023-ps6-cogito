const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Correcting', {
  id: Joi.number().required(),
  questionId: Joi.number().required(),
  description: Joi.string().min(2).required(),
  picture: Joi.string().min(2),
  sound: Joi.string().min(2),
})
