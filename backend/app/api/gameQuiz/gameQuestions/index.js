const { Router } = require('express')

const manageAllErrors = require('../../../utils/routes/error-management')
const { GameQuestion } = require('../../../models')
const { buildGameQuestion, getAllGameQuestions, findGameQuizGameQuestions, findGameQuizAndQuestionGameQuestions, createGameQuestion, updateGameQuestion } = require('./manager')

const router = new Router({ mergeParams: true })

router.get('/', (req, res) => {
  try {
    res.status(200).json(getAllGameQuestions())
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
    res.status(200).json(findGameQuizGameQuestions(req.params.gameQuizId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/gameQuiz/:gameQuizId/question/:questionId', (req, res) => {
  try {
    res.status(200).json(findGameQuizAndQuestionGameQuestions(req.params.gameQuizId, req.params.questionId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
  try {
    res.status(201).json(createGameQuestion({ ...req.body }))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:gameQuestionId', (req, res) => {
  try {
    res.status(200).json(updateGameQuestion(req.params.gameQuestionId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:gameQuestionId', (req, res) => {
  try {
    GameQuestion.delete(req.params.gameQuestionId)
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router
