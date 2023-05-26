const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

const questionSchema = Joi.object({
    questionId: Joi.number().required(),
    isCorrect: Joi.boolean().required(),
  });

module.exports = new BaseModel('Statistic', {
  patientid: Joi.number().required(),
  quizId: Joi.number().required(),
  results: Joi.array().items(Joi.object().pattern(Joi.number(), questionSchema)).required(),
})