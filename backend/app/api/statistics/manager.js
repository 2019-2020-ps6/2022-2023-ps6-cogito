const Statistic = require('../../models/statistic.model')
const NotFoundError = require('../../utils/errors/not-found-error')

const findStatisticByPatientId = (patientId) => {
  const statistics = Statistic.get()
  const index = statistics.findIndex((value) => value.patientId.toString() === patientId)
  if (index === -1) throw new NotFoundError(`Cannot get ${this.name} patientId=${patientId} : not found`)
  return statistics[index]
}

module.exports = {
  findStatisticByPatientId,
}
