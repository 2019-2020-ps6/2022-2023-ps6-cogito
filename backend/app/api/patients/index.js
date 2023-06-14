const { Router } = require('express')

const { Patient } = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')
const {getAllQuizzesOfPatient} = require('./manager')

const router = new Router()

router.get('/', (req, res) => {
  try {
    res.status(200).json(Patient.get())
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
    res.status(201).json(Patient.create({ ...req.body }))
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

router.get('/:patientId/quizzes', (req, res) => {
  try{
    res.status(200).json(getAllQuizzesOfPatient(req.params.patientId));
  }catch(err){
    console.log(err);
    manageAllErrors(res, err);
  }
})

router.delete('/:patientId', (req, res) => {
  try {
    Patient.delete(req.params.patientId)
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router
