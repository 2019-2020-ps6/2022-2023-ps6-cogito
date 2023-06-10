const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Theme', {
  id: Joi.number().required(),
  title: Joi.string().required(),
  picture: Joi.string(),
})
