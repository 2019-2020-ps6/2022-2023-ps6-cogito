const { Quiz, Patient, Statistic} = require('../../../models')
const NotFoundError = require('../../../utils/errors/not-found-error.js')


/**
 * @param patientId
 */
const filterStatsFromPatient = (patientId) => {
  const stats = Statistic.get()
  const parsedId = parseInt(patientId, 10)
  return stats.filter((stat) => stat.patientid === parsedId)
}

/**
 * @param quizId
 * @param patientId
 */
const getAnswersFromQuiz = (quizId, patientId) => {
  const stat = filterStatsFromPatient(parseInt(patientId, 10))
  const parsedId = parseInt(quizId, 10)
  return stat.filter((stat) => stat.quizId === parsedId).results
  
}

module.exports = {
    filterStatsFromPatient,
    getAnswersFromQuiz,
}
