const { Answer, Question } = require('../../../../models')

const checkAnswer = (answer) => {
  const { questionId } = answer
  if (questionId) Question.getById(questionId)
}

const findQuestionAnswers = (questionId) => {
  const answerList = Answer.get()
  return answerList.filter((answer) => answer.questionId.toString() === questionId)
}

module.exports = {
  checkAnswer,
  findQuestionAnswers,
}
