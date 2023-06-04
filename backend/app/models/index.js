const Answer = require('./answer.model.js')
const Question = require('./question.model.js')
const Quiz = require('./quiz.model.js')
const User = require('./user.model.js')
const Configuration = require('./configuration.model.js')
const Theme = require('./theme.model.js')
const Patient = require('./patient.model')
const Statistic = require('./statistic.model')
const GameQuiz = require('./gameQuiz.model')

module.exports = {
  Theme,
  User,
  Configuration,
  Quiz,
  Question,
  Answer,
  Patient,
  Statistic,
  GameQuiz,
}
