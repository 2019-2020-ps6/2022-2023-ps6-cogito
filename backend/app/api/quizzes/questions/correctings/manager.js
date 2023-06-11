const { Correcting,
  Question,
  Answer
} = require('../../../../models')

const findQuestionCorrectings = (questionId) => {
  // Check parameters type
  const newQuestionId = (typeof questionId === 'string') ? parseInt(questionId, 10) : questionId

  const correctingList = Correcting.get()
  return correctingList.filter((correcting) => correcting.questionId === newQuestionId)
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
  findQuestionCorrectings,
  createCorrecting,
  updateCorrecting,
}
