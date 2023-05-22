const { Router } = require('express')

const { Patient } = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')

const router = new Router()

router.get('/', (req, res) => {
  try {
    res.status(200).json(Patient.get())
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router
