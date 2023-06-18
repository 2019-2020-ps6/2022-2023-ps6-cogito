const { Answer, Question } = require('../../../../models')

const findQuestionAnswers = (questionId) => {
  // Check parameters type
  const newQuestionId = (typeof questionId === 'string') ? parseInt(questionId, 10) : questionId

  const answerList = Answer.get()
  console.log(answerList);
  return answerList.filter((answer) => answer.questionId === newQuestionId)
}

const checkAnswer = (answer) => {
  const { questionId } = answer
  if (questionId) Question.getById(questionId)
  return answer
}

const createAnswer = (answer) => {
  const newAnswer = checkAnswer(answer)
  return Answer.create(newAnswer)
}

const updateAnswer = (answerId, answer) => {
  const newAnswer = checkAnswer(answer)
  return Answer.update(answerId, newAnswer)
}

module.exports = {
  findQuestionAnswers,
  createAnswer,
  updateAnswer,
}
