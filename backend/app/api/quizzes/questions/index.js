const { Router } = require('express')

const { Question } = require('../../../models')
const manageAllErrors = require('../../../utils/routes/error-management')
const {
  buildQuestion,
  buildQuestions,
  findQuizQuestions,
  createQuestion,
  updateQuestion,
} = require('./manager')

const router = new Router({ mergeParams: true })

router.get('/', (req, res) => {
  try {
    res.status(200).json(buildQuestions())
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:questionId', (req, res) => {
  try {
    const question = Question.getById(req.params.questionId)
    res.status(200).json(buildQuestion(question))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/quiz/:quizId', (req, res) => {
  try {
    res.status(200).json(findQuizQuestions(req.params.quizId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
  try {
    res.status(201).json(createQuestion({ ...req.body }))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:questionId', (req, res) => {
  try {
    res.status(200).json(updateQuestion(req.params.questionId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:questionId', (req, res) => {
  try {
    Question.delete(req.params.questionId)
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router
