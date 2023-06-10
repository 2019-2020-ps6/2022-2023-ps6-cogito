const { Router } = require('express')

const { Theme } = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')
const QuizzesRouter = require('../quizzes')
const { buildTheme, buildThemes, filterThemesFromPatient } = require('./manager')

const router = new Router()

router.use('/:themeId/quizzes', QuizzesRouter)

/**
 * Get all themes
 */
router.get('/', (req, res) => {
  try {
    const themes = buildThemes()
    res.status(200).json(themes)
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
    res.status(200).json(filterThemesFromPatient(req.params.patientId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

/**
 * Create a theme and return a built theme
 */
router.post('/', (req, res) => {
  try {
    const theme = Theme.create({ ...req.body })
    res.status(201).json(buildTheme(theme))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:themeId', (req, res) => {
  try {
    const theme = Theme.update(req.params.themeId, req.body)
    res.status(200).json(buildTheme(theme))
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
