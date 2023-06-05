const GameQuestion = require('../../../models/gameQuestion.model')

const buildGameQuestion = (gameQuestion) => ({ ...gameQuestion, answerList: [0] })

const getAllGameQuestion = () => {
  const gameQuestionList = GameQuestion.get()
  return gameQuestionList.map((gameQuestion) => buildGameQuestion(gameQuestion))
}

const findGameQuestionByGameQuiz = (gameQuizId) => {
  const gameQuestionList = GameQuestion.get()
  const gameQuestions = gameQuestionList.filter((gameQuestion) => gameQuestion.gameQuizId.toString() === gameQuizId)
  return gameQuestions.map((gameQuestion) => buildGameQuestion(gameQuestion))
}

const findGameQuestionByGameQuizAndQuestion = (gameQuizId, questionId) => {
  const gameQuestionList = GameQuestion.get()
  const gameQuestions = gameQuestionList.filter((gameQuestion) => gameQuestion.gameQuizId.toString() === gameQuizId && gameQuestion.questionId.toString() === questionId)
  return gameQuestions.map((gameQuestion) => buildGameQuestion(gameQuestion))
}

module.exports = {
  buildGameQuestion,
  getAllGameQuestion,
  findGameQuestionByGameQuiz,
  findGameQuestionByGameQuizAndQuestion,
}
