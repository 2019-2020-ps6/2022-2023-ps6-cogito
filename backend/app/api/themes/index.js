const { Router } = require('express')

const { Theme, Patient } = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')
const QuizzesRouter = require('../quizzes')
const { buildTheme, buildThemes,filterThemesFromPatient } = require('./manager')

const router = new Router()

router.use('/:themeId/quizzes', QuizzesRouter)

/**
 * Get all themes from a patient
 */

router.get('/patient/:patientId', (req, res) => {
  console.log(req.params)
  try {
    Patient.getById(req.params.patientId)
    res.status(200).json(filterThemesFromPatient(req.params.patientId))
  } catch (err) {
    console.log(err);
    manageAllErrors(res, err)
  }
})

router.get('/', (req, res) => {
  try {
    const themes = buildThemes()
    res.status(200).json(themes)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:themeId', (req, res) => {
  try {
    const theme = buildTheme(req.params.themeId)
    res.status(200).json(theme)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
  try {
    console.log("post theme")
    const theme = { ...req.body }
    Theme.create(theme)
    res.status(201).json(theme)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:themeId', (req, res) => {
  try {
    res.status(200).json(Theme.update(req.params.themeId, req.body))
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
