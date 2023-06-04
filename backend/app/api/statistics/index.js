const { Router } = require('express')

const { Statistic } = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')

const router = new Router()

router.get('/', (req, res) => {
  try {
    res.status(200).json(Statistic.get())
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
  try {
    const statistic = Statistic.create({ ...req.body })
    res.status(201).json(statistic)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router
