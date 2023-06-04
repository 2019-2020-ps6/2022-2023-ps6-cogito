const { Router } = require('express')

const { Statistic } = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')
const { findStatisticByPatientId } = require('./manager')

const router = new Router()

router.get('/', (req, res) => {
  try {
    res.status(200).json(Statistic.get())
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:patientId', (req, res) => {
  try {
    const statistic = findStatisticByPatientId(req.params.patientId)
    res.status(200).json(statistic)
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

router.put('/:statisticId', (req, res) => {
  try {
    res.status(200).json(Statistic.update(req.params.statisticId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:statisticId', (req, res) => {
  try {
    Statistic.delete(req.params.statisticId)
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router