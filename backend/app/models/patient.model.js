const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Patient', {
  name: Joi.string().min(2).required(),
  birthdate: Joi.date().max('now').required(),
  stage: Joi.number().min(3).max(5).required(),
  picture: Joi.string().min(2).required(),
})
