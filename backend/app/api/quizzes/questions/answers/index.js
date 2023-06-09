const { Router } = require('express')

const { Answer } = require('../../../../models')
const manageAllErrors = require('../../../../utils/routes/error-management')
const {
  findQuestionAnswers,
  createAnswer,
  updateAnswer,
} = require('./manager')

const router = new Router({ mergeParams: true })

router.get('/', (req, res) => {
  try {
    res.status(200).json(Answer.get())
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:answerId', (req, res) => {
  try {
    res.status(200).json(Answer.getById(req.params.answerId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/question/:questionId', (req, res) => {
  try {
    res.status(200).json(findQuestionAnswers(req.params.questionId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:answerId', (req, res) => {
  try {
    Answer.delete(req.params.answerId)
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router
