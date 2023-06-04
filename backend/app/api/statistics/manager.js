const Statistic = require('../../models/statistic.model')

const findStatisticByPatientId = (patientId) => {
  const statistics = Statistic.get()
  const index = statistics.findIndex((value) => value.patientId.toString() === patientId)
  return statistics[index]
}

module.exports = {
  findStatisticByPatientId,
}
