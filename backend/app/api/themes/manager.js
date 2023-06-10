const { Theme, Patient } = require('../../models')

/**
 * Function buildTheme.
 * This function aggregates the questions and answers from the database to build a Theme with all the data needed by the clients.
 * @param themeId
 */
const buildTheme = (themeId) => Theme.getById(themeId)

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
  const patient = Patient.getById(patientId)
  const themes = Theme.get()
  return themes.filter((theme) => patient.themeIdList.includes(theme.id))
}

module.exports = {
  buildTheme,
  buildThemes,
  filterThemesFromPatient,
}
