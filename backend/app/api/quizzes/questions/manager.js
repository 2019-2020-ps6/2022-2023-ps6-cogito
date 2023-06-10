const { Question } = require('../../../models')

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
  buildQuestion,
  buildQuestions,
  findQuizQuestions,
}
