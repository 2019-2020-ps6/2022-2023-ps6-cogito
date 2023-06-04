const Joi = require('joi')
const BaseModel = require('../utils/base-model')

module.exports = new BaseModel('Statistic', {
  id: Joi.number().required(),
  patientId: Joi.number().required(),
  gameResults: Joi.array().items(Joi.number()).required(),
})
