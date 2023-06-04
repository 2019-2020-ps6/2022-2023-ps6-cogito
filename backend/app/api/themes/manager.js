const { Theme, User, Patient } = require('../../models')

/**
 * Function buildTheme.
 * This function aggregates the questions and answers from the database to build a Theme with all the data needed by the clients.
 * @param themeId
 */
const buildTheme = (themeId) => {
  const theme = Theme.getById(themeId)
  return theme
}

/**
 * Function buildThemes.
 * This function aggregates the questions and answers from the database to build entire themes.
 */
const buildThemes = () => {
  const themes = Theme.get()
  return themes.map((theme) => buildTheme(theme.id))
}

/**
 * filterThemesFromPatient.
 * This function filters among the themes to return only the themes linked with the given patientId.
 * @param patientId
 */
const filterThemesFromPatient = (patientId) => {
  const parsedId = parseInt(patientId, 10)
  const patient = Patient.getById(parsedId)
  const themes = Theme.get()
  console.log(themes)
  const filteredThemes = themes.filter((theme) => patient.themeIdList.includes(theme.id))
  return filteredThemes
}

module.exports = {
  buildTheme,
  buildThemes,
  filterThemesFromPatient,
}