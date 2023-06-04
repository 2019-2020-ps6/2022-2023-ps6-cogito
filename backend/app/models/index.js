const Question = require('./question.model.js')
const Quiz = require('./quiz.model.js')
const Configuration = require('./configuration.model.js')
const Theme = require('./theme.model.js')
const Patient = require('./patient.model')
const Statistic = require('./statistic.model')
const GameQuiz = require('./gameQuiz.model')

module.exports = {
  Theme,
  Configuration,
  Quiz,
  Question,
  Patient,
  Statistic,
  GameQuiz,
}
