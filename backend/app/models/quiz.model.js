const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Quiz', {
  id: Joi.number().required(),
  themeId: Joi.number().required(),
  title: Joi.string().required(),
  picture: Joi.string(),
})
