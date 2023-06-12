const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Configuration', {
    id: Joi.number().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),

    fontFamily: Joi.string().required(),
    fontSize: Joi.number().required(),

    pictures: Joi.boolean().required(),
    sounds: Joi.boolean().required(),
    multipleAnswers: Joi.boolean().required(),
    hints: Joi.boolean().required(),
    timeDisplayHints: Joi.number(),
    difficulty: Joi.number().min(1).max(3).required(),
    againFalseQuestion: Joi.boolean().required(),

    correctAnswerWindow: Joi.boolean().required(),
    correctDescription: Joi.boolean().required(),
    correctPicture: Joi.boolean().required(),
    correctSound: Joi.boolean().required(),

    wrongAnswerWindow: Joi.boolean().required(),
    wrongDescription: Joi.boolean().required(),
    wrongPicture: Joi.boolean().required(),
    wrongSound: Joi.boolean().required(),
})
