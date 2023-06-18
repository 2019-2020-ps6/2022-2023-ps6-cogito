const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Patient', {
  id: Joi.number().required(),
  name: Joi.string().min(2).required(),
  birthdate: Joi.date().max('now').required(),
  stage: Joi.number().min(3).max(5).required(),
  picture: Joi.string().min(2).required(),
  configurationId: Joi.number().required(),
  themeIdList: Joi.array().items(Joi.number()).required(),
  quizIdList: Joi.array().items(Joi.number()).required(),
  quizToPlayList: Joi.array().items(Joi.number()).required(),
})
