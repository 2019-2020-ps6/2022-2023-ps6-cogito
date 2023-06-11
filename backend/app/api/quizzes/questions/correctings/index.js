const { Router } = require('express')

const { Correcting } = require('../../../../models')
const manageAllErrors = require('../../../../utils/routes/error-management')

const router = new Router({ mergeParams: true })

router.get('/', (req, res) => {
  try {
    res.status(200).json(Correcting.get())
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router
