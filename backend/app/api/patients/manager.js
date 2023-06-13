const { Patient, Configuration } = require('../../models')

const buildPatient = (patient) => {
  const configuration = Configuration.getById(patient.configurationId)
  const { configurationId, ...newPatient } = patient
  return { ...newPatient, configuration }
}

const getAllPatients = () => {
  const patients = Patient.get()
  return patients.map((patient) => buildPatient(patient))
}

const checkPatient = (patient) => {
  // Remove properties that are not in backend Question
  const configurationId = patient.configuration.id
  const { configuration, ...newPatient } = patient
  return { ...newPatient, configurationId }
}

const createPatient = (patient) => {
  const newPatient = checkPatient(patient)
  return buildPatient(Patient.create(newPatient))
}

const updatePatient = (patientId, patient) => {
  const newPatient = checkPatient(patient)
  return buildPatient(Patient.update(patientId, newPatient))
}

module.exports = {
  buildPatient,
  getAllPatients,
  createPatient,
  updatePatient,
}
