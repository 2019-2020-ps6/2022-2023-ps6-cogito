const { Question, Quiz } = require('../../../models')

const checkQuestion = (question) => {
  const { quizId } = question
  if (quizId) Quiz.getById(quizId)
}

const buildQuestion = (question) => ({ ...question, answerList: [0] })

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
