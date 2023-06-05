const { Router } = require('express')

const manageAllErrors = require('../../../utils/routes/error-management')
const { GameQuestion } = require('../../../models')

const router = new Router({ mergeParams: true })

router.get('/', (req, res) => {
  try {
    console.log(req.params.gameQuizId)
    res.status(200).json(GameQuestion.get())
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router
