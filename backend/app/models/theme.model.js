const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Theme', {
  id: Joi.number().required(),
  title: Joi.string().min(2).required(),
  picture: Joi.string(),
})
