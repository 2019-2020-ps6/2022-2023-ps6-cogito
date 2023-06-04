const Statistic = require('../../models/statistic.model')

const findStatisticByPatientId = (patientId) => {
  const statistics = Statistic.get()
  /* for (const statistic of statistics) {
    if (statistic.patientId.toString() === patientId) {
      return statistic
    }
  } */
  const index = statistics.findIndex((value) => value.patientId.toString() === patientId)
  console.log(index)
  return statistics[index]
}

module.exports = {
  findStatisticByPatientId,
}
