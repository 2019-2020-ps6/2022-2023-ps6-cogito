const { Router } = require('express')

const { Correcting } = require('../../../../models')
const manageAllErrors = require('../../../../utils/routes/error-management')
const {
  findQuestionCorrecting,
  createCorrecting,
  updateCorrecting,
} = require('./manager')

const router = new Router({ mergeParams: true })

router.get('/', (req, res) => {
  try {
    res.status(200).json(Correcting.get())
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:correctingId', (req, res) => {
  try {
    res.status(200).json(Correcting.getById(req.params.correctingId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/question/:questionId', (req, res) => {
  try {
    res.status(200).json(findQuestionCorrecting(req.params.questionId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:correctingId', (req, res) => {
  try {
    Correcting.delete(req.params.correctingId)
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router
