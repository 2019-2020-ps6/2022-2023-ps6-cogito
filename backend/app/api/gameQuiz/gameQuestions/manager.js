const GameQuestion = require('../../../models/gameQuestion.model')

const buildGameQuestion = (gameQuestion) => ({ ...gameQuestion, answerList: [0] })

const getAllGameQuestion = () => {
  const gameQuestionList = GameQuestion.get()
  return gameQuestionList.map((gameQuestion) => buildGameQuestion(gameQuestion))
}

module.exports = {
  buildGameQuestion,
  getAllGameQuestion,
}
