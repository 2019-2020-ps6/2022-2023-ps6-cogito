const { Theme, Patient,
  Quiz,
  Question
} = require('../../models')
const { findThemeQuizzes } = require('../quizzes/manager')

/**
 * Function buildTheme.
 * This function add a quizList to the theme to fit frontend model.
 * @param theme the backend theme to build
 */
const buildTheme = (theme) => {
  const quizzesList = findThemeQuizzes(theme.id)
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
  // Check parameters type
  const newPatientId = (typeof patientId === 'string') ? parseInt(patientId, 10) : patientId

  const patient = Patient.getById(newPatientId)
  const themeList = Theme.get()
  const themes = themeList.filter((theme) => patient.themeIdList.includes(theme.id))
  return themes.map((theme) => buildTheme(theme))
}

const checkTheme = (theme) => {
  // Remove properties that are not in backend Question
  const { quizzesList, ...newTheme } = theme
  return newTheme
}

const createTheme = (theme) => {
  const newTheme = checkTheme(theme)
  return buildTheme(Theme.create(newTheme))
}

const updateTheme = (themeId, theme) => {
  const newTheme = checkTheme(theme)
  return buildTheme(Theme.update(themeId, newTheme))
}

module.exports = {
  buildTheme,
  buildThemes,
  findPatientThemes,
  createTheme,
  updateTheme,
}
