const { Router } = require('express')

const manageAllErrors = require('../../../utils/routes/error-management')
const { GameQuestion } = require('../../../models')
const { buildGameQuestion, getAllGameQuestion } = require('./manager')

const router = new Router({ mergeParams: true })

router.get('/', (req, res) => {
  try {
    res.status(200).json(getAllGameQuestion())
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

module.exports = router
