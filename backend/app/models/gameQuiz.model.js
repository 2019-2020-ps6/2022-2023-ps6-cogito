const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('GameQuiz', {
  id: Joi.number().required(),
  patientId: Joi.number().required(),
  quizId: Joi.number().required(),
  startTime: Joi.date().max('now').required(),
  endTime: Joi.date().max('now').required(),
})
