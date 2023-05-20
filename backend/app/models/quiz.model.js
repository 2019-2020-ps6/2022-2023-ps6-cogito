const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Quiz', {
  id: Joi.string().required(),
  title: Joi.string().required(),
  picture: Joi.string(),
  questionList: Joi.array().items(Joi.number()).required(),
})