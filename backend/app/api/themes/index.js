const { Router } = require('express')

const { Theme } = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')
const {
  buildTheme,
  buildThemes,
  findPatientThemes,
  createTheme,
  updateTheme,
} = require('./manager')

const router = new Router({ mergeParams: true })

/**
 * Get all themes
 */
router.get('/', (req, res) => {
  try {
    res.status(200).json(buildThemes())
  } catch (err) {
    manageAllErrors(res, err)
  }
})

/**
 * Get theme by id
 */
router.get('/:themeId', (req, res) => {
  try {
    const theme = Theme.getById(req.params.themeId)
    res.status(200).json(buildTheme(theme))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

/**
 * Get all themes from a patient
 */
router.get('/patient/:patientId', (req, res) => {
  try {
    res.status(200).json(findPatientThemes(req.params.patientId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

/**
 * Create a theme and return a built theme
 */
router.post('/', (req, res) => {
  try {
    res.status(201).json(createTheme({ ...req.body }))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:themeId', (req, res) => {
  try {
    res.status(200).json(updateTheme(req.params.themeId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:themeId', (req, res) => {
  try {
    Theme.delete(req.params.themeId)
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router
