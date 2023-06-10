const { Question, Quiz } = require('../../../models')
const { findQuestionAnswers } = require('./answers/manager')

const checkQuestion = (question) => {
  const { quizId } = question
  if (quizId) Quiz.getById(quizId)
}

const buildQuestion = (question) => {
  const answerList = findQuestionAnswers(question.id.toString())
  return { ...question, answerList }
}

const buildQuestions = () => {
  const questions = Question.get()
  return questions.map((question) => buildQuestion(question))
}

const findQuizQuestions = (quizId) => {
  const questionList = Question.get()
  const questions = questionList.filter((question) => question.quizId.toString() === quizId)
  return questions.map((question) => buildQuestion(question))
}

module.exports = {
  checkQuestion,
  buildQuestion,
  buildQuestions,
  findQuizQuestions,
}
