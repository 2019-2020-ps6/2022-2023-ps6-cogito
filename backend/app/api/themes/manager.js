const { Theme, Patient } = require('../../models')
const { findThemeQuizzes } = require('../quizzes/manager')

/**
 * Function buildTheme.
 * This function add a quizList to the theme to fit frontend model.
 * @param theme the backend theme to build
 */
const buildTheme = (theme) => {
  const quizzesList = findThemeQuizzes(theme.id.toString())
  return { ...theme, quizzesList }
}

/**
 * Function buildThemes.
 * This function get all themes from database and build it to fit frontend theme.
 */
const buildThemes = () => {
  const themes = Theme.get()
  return themes.map((theme) => buildTheme(theme))
}

/**
 * Function findPatientThemes.
 * This function get all themes from a patient.
 * @param patientId the id of the patient
 */
const findPatientThemes = (patientId) => {
  const patient = Patient.getById(patientId)
  const themes = Theme.get()
  return themes.filter((theme) => patient.themeIdList.includes(theme.id))
}

module.exports = {
  buildTheme,
  buildThemes,
  findPatientThemes,
}
