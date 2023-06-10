const GameQuiz = require('../../models/gameQuiz.model')
const { findGameQuizGameQuestions } = require('./gameQuestions/manager')
const { Patient, Quiz } = require('../../models')

const buildGameQuiz = (gameQuiz) => {
  const questionList = findGameQuizGameQuestions(gameQuiz.id)

  // Add missing properties in backend GameQuiz to fit frontend model
  return { ...gameQuiz, questionList }
}

const getAllGameQuiz = () => {
  const gameQuizList = GameQuiz.get()
  return gameQuizList.map((gameQuiz) => buildGameQuiz(gameQuiz))
}

const findPatientGameQuiz = (patientId) => {
  // Check parameters type
  const newPatientId = (typeof patientId === 'string') ? parseInt(patientId, 10) : patientId

  const gameQuizList = GameQuiz.get()
  const GameQuizzes = gameQuizList.filter((gameQuiz) => gameQuiz.patientId === newPatientId)
  return GameQuizzes.map((gameQuiz) => buildGameQuiz(gameQuiz))
}

const findPatientAndQuizGameQuiz = (patientId, quizId) => {
  // Check parameters type
  const newPatientId = (typeof patientId === 'string') ? parseInt(patientId, 10) : patientId
  const newQuizId = (typeof quizId === 'string') ? parseInt(quizId, 10) : quizId

  const gameQuizList = GameQuiz.get()
  const GameQuizzes = gameQuizList.filter((gameQuiz) => gameQuiz.patientId === newPatientId && gameQuiz.quizId === newQuizId)
  return GameQuizzes.map((gameQuiz) => buildGameQuiz(gameQuiz))
}

const checkGameQuiz = (gameQuiz) => {
  // Check if existing properties are correct
  if (gameQuiz.patientId) Patient.getById(gameQuiz.patientId)
  if (gameQuiz.quizId) Quiz.getById(gameQuiz.quizId)

  // Remove properties that are not in backend GameQuiz
  const { questionList, ...newGameQuiz } = gameQuiz
  return newGameQuiz
}

const createGameQuiz = (gameQuiz) => {
  const newGameQuiz = checkGameQuiz(gameQuiz)
  return buildGameQuiz(GameQuiz.create(newGameQuiz))
}

const updateGameQuiz = (gameQuizId, gameQuiz) => {
  const newGameQuiz = checkGameQuiz(gameQuiz)
  return buildGameQuiz(GameQuiz.update(gameQuizId, newGameQuiz))
}

module.exports = {
  buildGameQuiz,
  getAllGameQuiz,
  findPatientGameQuiz,
  findPatientAndQuizGameQuiz,
  createGameQuiz,
  updateGameQuiz,
}
