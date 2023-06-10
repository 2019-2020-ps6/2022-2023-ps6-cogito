const { Question, Quiz } = require('../../../models')
const { findQuestionAnswers } = require('./answers/manager')

const buildQuestion = (question) => {
  const answerList = findQuestionAnswers(question.id)
  return { ...question, answerList }
}

const buildQuestions = () => {
  const questions = Question.get()
  return questions.map((question) => buildQuestion(question))
}

const findQuizQuestions = (quizId) => {
  // Check parameters type
  const newQuizId = (typeof quizId === 'string') ? parseInt(quizId, 10) : quizId

  const questionList = Question.get()
  const questions = questionList.filter((question) => question.quizId === newQuizId)
  return questions.map((question) => buildQuestion(question))
}

const checkQuestion = (question) => {
  // Check if existing properties are correct
  if (question.quizId) Quiz.getById(question.quizId)

  // Remove properties that are not in backend Question
  const { answerList, correcting, ...newQuestion } = question
  return newQuestion
}

const createQuestion = (question) => {
  const newQuestion = checkQuestion(question)
  return buildQuestion(Question.create(newQuestion))
}

const updateQuestion = (questionId, question) => {
  const newQuestion = checkQuestion(question)
  return buildQuestion(Question.update(questionId, newQuestion))
}

module.exports = {
  buildQuestion,
  buildQuestions,
  findQuizQuestions,
  createQuestion,
  updateQuestion,
}
