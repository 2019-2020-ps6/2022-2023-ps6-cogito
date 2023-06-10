const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Question', {
  id: Joi.number().required(),
  quizId: Joi.number().required(),
  title: Joi.string().required(),
  difficulty: Joi.number().min(1).max(3).required(),
  defaultMediaType: Joi.number().min(0).max(2).required(),
  defaultAnswersMediaType: Joi.number().min(0).max(2).required(),
  hint: Joi.string().min(2),
  picture: Joi.string().min(2),
  sound: Joi.string().min(2),
})
