const GameQuestion = require('../../../models/gameQuestion.model')

const buildGameQuestion = (gameQuestion) => ({ ...gameQuestion, answerList: [0] })

const getAllGameQuestion = () => {
  const gameQuestions = GameQuestion.get()
  return gameQuestions.map((gameQuestion) => buildGameQuestion(gameQuestion))
}

module.exports = {
  buildGameQuestion,
  getAllGameQuestion,
}
