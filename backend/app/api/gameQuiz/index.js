const { Router } = require('express')

const manageAllErrors = require('../../utils/routes/error-management')
const { GameQuiz } = require('../../models')
const { buildGameQuiz, getAllGameQuiz, findGameQuizByPatient, findGameQuizByPatientAndQuiz } = require('./manager')

const router = new Router({ mergeParams: true })

router.get('/', (req, res) => {
  try {
    res.status(200).json(getAllGameQuiz())
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:gameQuizId', (req, res) => {
  try {
    const gameQuiz = GameQuiz.getById(req.params.gameQuizId)
    res.status(200).json(buildGameQuiz(gameQuiz))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/patient/:patientId', (req, res) => {
  try {
    res.status(200).json(findGameQuizByPatient(req.params.patientId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/patient/:patientId/quiz/:quizId', (req, res) => {
  try {
    res.status(200).json(findGameQuizByPatientAndQuiz(req.params.patientId, req.params.quizId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
  try {
    const gameQuiz = GameQuiz.create({ ...req.body })
    res.status(201).json(buildGameQuiz(gameQuiz))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:gameQuizId', (req, res) => {
  try {
    const gameQuiz = GameQuiz.update(req.params.gameQuizId, req.body)
    res.status(201).json(buildGameQuiz(gameQuiz))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:gameQuizId', (req, res) => {
  try {
    GameQuiz.delete(req.params.gameQuizId)
    res.status(204)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router
