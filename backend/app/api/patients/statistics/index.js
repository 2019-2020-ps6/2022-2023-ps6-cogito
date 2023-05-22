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

router.get('/:patientId', (req, res) => {
  try {
    res.status(200).json(Patient.getById(req.params.patientId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
  try {
    const patient = Patient.create({ ...req.body })
    res.status(201).json(patient)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:patientId', (req, res) => {
  try {
    res.status(200).json(Patient.update(req.params.patientId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:patientId', (req, res) => {
  try {
    Patient.delete(req.params.patientId) // peut-être renvoyer la nouvelle liste des patients
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.use('/:patientId/statistics', StatisticsRouter)

module.exports = router