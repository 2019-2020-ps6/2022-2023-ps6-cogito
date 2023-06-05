const { Router } = require('express')

const manageAllErrors = require('../../../utils/routes/error-management')
const { GameQuestion } = require('../../../models')
const { buildGameQuestion, getAllGameQuestion, findGameQuestionByGameQuiz, findGameQuestionByGameQuizAndQuestion } = require('./manager')

const router = new Router({ mergeParams: true })

router.get('/', (req, res) => {
  try {
    res.status(200).json(getAllGameQuestion())
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:gameQuestionId', (req, res) => {
  try {
    const gameQuestion = GameQuestion.getById(req.params.gameQuestionId)
    res.status(200).json(buildGameQuestion(gameQuestion))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/gameQuiz/:gameQuizId', (req, res) => {
  try {
    res.status(200).json(findGameQuestionByGameQuiz(req.params.gameQuizId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/gameQuiz/:gameQuizId/question/:questionId', (req, res) => {
  try {
    res.status(200).json(findGameQuestionByGameQuizAndQuestion(req.params.gameQuizId, req.params.questionId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
  try {
    const gameQuestion = GameQuestion.create({ ...req.body })
    res.status(201).json(buildGameQuestion(gameQuestion))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:gameQuestionId', (req, res) => {
  try {
    const gameQuestion = GameQuestion.update(req.params.gameQuestionId, req.body)
    res.status(200).json(buildGameQuestion(gameQuestion))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router
