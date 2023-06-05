const GameQuestion = require('../../../models/gameQuestion.model')

const buildGameQuestion = (gameQuestion) => ({ ...gameQuestion, answerList: [0] })

const getAllGameQuestions = () => {
  const gameQuestionList = GameQuestion.get()
  return gameQuestionList.map((gameQuestion) => buildGameQuestion(gameQuestion))
}

const findGameQuestionsByGameQuiz = (gameQuizId) => {
  const gameQuestionList = GameQuestion.get()
  const gameQuestions = gameQuestionList.filter((gameQuestion) => gameQuestion.gameQuizId.toString() === gameQuizId)
  return gameQuestions.map((gameQuestion) => buildGameQuestion(gameQuestion))
}

const findGameQuestionsByGameQuizAndQuestion = (gameQuizId, questionId) => {
  const gameQuestionList = GameQuestion.get()
  const gameQuestions = gameQuestionList.filter((gameQuestion) => gameQuestion.gameQuizId.toString() === gameQuizId && gameQuestion.questionId.toString() === questionId)
  return gameQuestions.map((gameQuestion) => buildGameQuestion(gameQuestion))
}

module.exports = {
  buildGameQuestion,
  getAllGameQuestions,
  findGameQuestionsByGameQuiz,
  findGameQuestionsByGameQuizAndQuestion,
}
