const { Router } = require('express')

const { Patient } = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')
const {
  buildPatient,
  getAllPatients,
  createPatient,
  updatePatient,
  getAllQuizzesOfPatient
} = require('./manager')

const router = new Router({ mergeParams: true })

router.get('/', (req, res) => {
  try {
    res.status(200).json(getAllPatients())
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:patientId', (req, res) => {
  try {
    const patient = Patient.getById(req.params.patientId)
    res.status(200).json(buildPatient(patient))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
  try {
    res.status(201).json(createPatient({ ...req.body }))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:patientId', (req, res) => {
  try {
    res.status(200).json(updatePatient(req.params.patientId, req.body))
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
