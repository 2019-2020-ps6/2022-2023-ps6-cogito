const { Correcting, Question } = require('../../../../models')

const findQuestionCorrecting = (questionId) => {
  // Check parameters type
  const newQuestionId = (typeof questionId === 'string') ? parseInt(questionId, 10) : questionId

  const correctingList = Correcting.get()
  const index = correctingList.findIndex((correcting) => correcting.questionId === newQuestionId)
  if (index !== -1) return correctingList[index]
  return undefined
}

const checkCorrecting = (correcting) => {
  const { questionId } = correcting
  if (questionId) Question.getById(questionId)
  return correcting
}

const createCorrecting = (correcting) => {
  const newCorrecting = checkCorrecting(correcting)
  return Correcting.create(newCorrecting)
}

const updateCorrecting = (correctingId, correcting) => {
  const newCorrecting = checkCorrecting(correcting)
  return Correcting.update(correctingId, newCorrecting)
}

module.exports = {
  findQuestionCorrecting,
  createCorrecting,
  updateCorrecting,
}
