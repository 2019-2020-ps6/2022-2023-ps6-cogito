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
  // Check parameters type
  const newGameQuizId = (typeof gameQuizId === 'string') ? parseInt(gameQuizId, 10) : gameQuizId

  const gameQuestionList = GameQuestion.get()
  const gameQuestions = gameQuestionList.filter((gameQuestion) => gameQuestion.gameQuizId === newGameQuizId)
  return gameQuestions.map((gameQuestion) => buildGameQuestion(gameQuestion))
}

const findGameQuizAndQuestionGameQuestions = (gameQuizId, questionId) => {
  // Check parameters type
  const newGameQuizId = (typeof gameQuizId === 'string') ? parseInt(gameQuizId, 10) : gameQuizId
  const newQuestionId = (typeof questionId === 'string') ? parseInt(questionId, 10) : questionId

  const gameQuestionList = GameQuestion.get()
  const gameQuestions = gameQuestionList.filter((gameQuestion) => gameQuestion.gameQuizId === newGameQuizId && gameQuestion.questionId === newQuestionId)
  return gameQuestions.map((gameQuestion) => buildGameQuestion(gameQuestion))
}

const checkGameQuestion = (gameQuestion) => {
  // Check if existing properties are correct
  if (gameQuestion.gameQuizId) GameQuiz.getById(gameQuestion.gameQuizId)
  if (gameQuestion.questionId) Question.getById(gameQuestion.questionId)
  let selectedAnswerId
  if (gameQuestion.selectedAnswer) {
    selectedAnswerId = gameQuestion.selectedAnswer.id
    Answer.getById(selectedAnswerId)
  }

  // Remove properties that are not in backend GameQuestion
  const { answerList, correcting, selectedAnswer, ...newGameQuestion } = gameQuestion
  return { ...newGameQuestion, selectedAnswerId }
}

const createGameQuestion = (gameQuestion) => {
  const newGameQuestion = checkGameQuestion(gameQuestion)
  return buildGameQuestion(GameQuestion.create(newGameQuestion))
}

const updateGameQuestion = (gameQuestionId, gameQuestion) => {
  const newGameQuestion = checkGameQuestion(gameQuestion)
  return buildGameQuestion(GameQuestion.update(gameQuestionId, newGameQuestion))
}

module.exports = {
  buildGameQuestion,
  getAllGameQuestions,
  findGameQuizGameQuestions,
  findGameQuizAndQuestionGameQuestions,
  createGameQuestion,
  updateGameQuestion,
}
