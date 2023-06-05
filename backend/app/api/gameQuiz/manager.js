const GameQuiz = require('../../models/gameQuiz.model')
const { findGameQuestionsByGameQuiz } = require('./gameQuestions/manager')

const buildGameQuiz = (gameQuiz) => {
  const gameQuestionList = findGameQuestionsByGameQuiz(gameQuiz.id.toString())
  return { ...gameQuiz, questionList: gameQuestionList }
}

const getAllGameQuiz = () => {
  const gameQuizList = GameQuiz.get()
  return gameQuizList.map((gameQuiz) => buildGameQuiz(gameQuiz))
}

const findGameQuizByPatient = (patientId) => {
  const gameQuizList = GameQuiz.get()
  const GameQuizzes = gameQuizList.filter((gameQuiz) => gameQuiz.patientId.toString() === patientId)
  return GameQuizzes.map((gameQuiz) => buildGameQuiz(gameQuiz))
}

const findGameQuizByPatientAndQuiz = (patientId, quizId) => {
  const gameQuizList = GameQuiz.get()
  const GameQuizzes = gameQuizList.filter((gameQuiz) => gameQuiz.patientId.toString() === patientId && gameQuiz.quizId.toString() === quizId)
  return GameQuizzes.map((gameQuiz) => buildGameQuiz(gameQuiz))
}

module.exports = {
  buildGameQuiz,
  getAllGameQuiz,
  findGameQuizByPatient,
  findGameQuizByPatientAndQuiz,
}
