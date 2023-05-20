const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Question', {
  id: Joi.number().required(),
  title: Joi.string().required(),
  answersList: Joi.array().items(Joi.number()).required(),
  defautlMediaType: Joi.number().required(), // id of the media
  defaultAnswersMediaType: Joi.number().required(), // id of the anzwers media
  correcting: Joi.string(),
  hint: Joi.string(),
  picture: Joi.string(),
  sound: Joi.string(),
})
