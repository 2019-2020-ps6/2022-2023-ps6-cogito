const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('GameQuestion', {
  id: Joi.number().required(),
  gameQuizId: Joi.number().required(),
  questionId: Joi.number().required(),
  title: Joi.string().min(2).required(),
  answersMediaType: Joi.number().min(0).max(2).required(),
  hint: Joi.string().min(2),
  picture: Joi.string().min(2),
  sound: Joi.string().min(2),
  startTime: Joi.date().max('now').required(),
  endTime: Joi.date().max('now').required(),
  displayedHint: Joi.boolean().required(),
  selectedAnswerId: Joi.number(),
})
