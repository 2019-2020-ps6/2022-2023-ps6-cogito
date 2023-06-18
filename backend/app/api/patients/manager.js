
const { Patient, Configuration, Quiz } = require('../../models')
const {findQuizQuestions  } = require('../quizzes/questions/manager')

const buildPatient = (patient) => {
  const configuration = Configuration.getById(patient.configurationId)
  const { configurationId, ...newPatient } = patient
  return { ...newPatient, configuration }
}

/**
 * return all the quizzes as an array of quiz of the patient 
 * function go through all the quizId present in the patient's quizIdList and find theme in the quiz database
 * @param {number} patientId 
 */
const getAllQuizzesOfPatient = (patientId) => {
    
    const patient = Patient.get().filter(p => p.id === parseInt(patientId))[0];
    const themeIds = patient.themeIdList;
    const quizzes = []
    for(let i = 0 ; i < themeIds.length; i++){
        const q = Quiz.get().filter((q) => q.themeId === themeIds[i]);
        if(q.length > 0){
            q[0].questionList = findQuizQuestions(q[0].id);
            for(let question of q[0].questionList){
                delete question.quizId;
            }
            quizzes.push(...q);
        }
    }
    return quizzes
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
  getAllQuizzesOfPatient
}
