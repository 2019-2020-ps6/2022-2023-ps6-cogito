const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Answer', {
  id: Joi.number().required(),
  questionId: Joi.number().required(),
  value: Joi.string().min(1).required(),
  isCorrect: Joi.boolean().required(),
  picture: Joi.string(),
  sound: Joi.string(),
})
