const GameQuestion = require('../../../models/gameQuestion.model')
const { findQuestionAnswers } = require('../../quizzes/questions/answers/manager')
const { Question, Answer, GameQuiz } = require('../../../models')

const buildGameQuestion = (gameQuestion) => {
  let newGameQuestion
  const answerList = findQuestionAnswers(gameQuestion.questionId.toString())

  // Add missing properties in backend GameQuestion to fit frontend model
  if (gameQuestion.selectedAnswerId) {
    const answerId = answerList.findIndex((answer) => answer.id === gameQuestion.selectedAnswerId)
    const { selectedAnswerId, ...notAnswer } = gameQuestion
    newGameQuestion = { ...notAnswer, answerList, selectedAnswer: answerList[answerId] }
  } else {
    newGameQuestion = { ...gameQuestion, answerList }
  }
  return newGameQuestion
}

const getAllGameQuestions = () => {
  const gameQuestionList = GameQuestion.get()
  return gameQuestionList.map((gameQuestion) => buildGameQuestion(gameQuestion))
}

const findGameQuizGameQuestions = (gameQuizId) => {
  const newGameQuizId = (typeof gameQuizId === 'number') ? gameQuizId.toString() : gameQuizId
  const gameQuestionList = GameQuestion.get()
  const gameQuestions = gameQuestionList.filter((gameQuestion) => gameQuestion.gameQuizId.toString() === newGameQuizId)
  return gameQuestions.map((gameQuestion) => buildGameQuestion(gameQuestion))
}

const findGameQuizAndQuestionGameQuestions = (gameQuizId, questionId) => {
  const newGameQuizId = (typeof gameQuizId === 'number') ? gameQuizId.toString() : gameQuizId
  const newQuestionId = (typeof questionId === 'number') ? questionId.toString() : questionId
  const gameQuestionList = GameQuestion.get()
  const gameQuestions = gameQuestionList.filter((gameQuestion) => gameQuestion.gameQuizId.toString() === newGameQuizId && gameQuestion.questionId.toString() === newQuestionId)
  return gameQuestions.map((gameQuestion) => buildGameQuestion(gameQuestion))
}

const checkGameQuestion = (gameQuestion) => {
  // Check if existing properties are correct
  if (gameQuestion.gameQuizId) GameQuiz.getById(gameQuestion.gameQuizId)
  if (gameQuestion.questionId) Question.getById(gameQuestion.questionId)
  const selectedAnswerId = gameQuestion.selectedAnswer.id
  if (selectedAnswerId) Answer.getById(selectedAnswerId)

  // Remove properties that are not in backend GameQuestion
  const { answerList, correcting, selectedAnswer, ...newGameQuestion } = gameQuestion
  return { ...newGameQuestion, selectedAnswerId }
}

const createGameQuestion = (gameQuestion) => {
  const newGameQuestion = checkGameQuestion(gameQuestion)
  return buildGameQuestion(GameQuestion.create(newGameQuestion))
}

const updateGameQuestion = (gameQuestion) => {
  const newGameQuestion = checkGameQuestion(gameQuestion)
  return buildGameQuestion(GameQuestion.update(newGameQuestion))
}

module.exports = {
  buildGameQuestion,
  getAllGameQuestions,
  findGameQuizGameQuestions,
  findGameQuizAndQuestionGameQuestions,
  createGameQuestion,
  updateGameQuestion,
}
