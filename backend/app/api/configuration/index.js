const { Router } = require('express')

const { Configuration } = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')

const router = new Router({ mergeParams: true })

/**
 * Get all configurations
 */
router.get('/', (req, res) => {
  try {
    res.status(200).json(Configuration.get())
  } catch (err) {
    manageAllErrors(res, err)
  }
})

/**
 * Get one configuration
 * We need to apply the configuration to the game
 */
router.get('/:configurationId', (req, res) => {
  try {
    res.status(200).json(Configuration.getById(req.params.configurationId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

/**
 * Create a configuration
 * Done, it works
 */
router.post('/', (req, res) => {
  try {
    Configuration.create({ ...req.body })
    res.status(201).json(Configuration.get())
  } catch (err) {
    manageAllErrors(res, err)
  }
})

/**
 * Update one configuration
 */
router.put('/:configurationId', (req, res) => {
  try {
    res.status(200).json(Configuration.update(req.params.configurationId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

/**
 * Delete one configuration
 * Useless for the moment, we don't have anything to delete configurations ?
 * Check if it could be really useful ?
 */
router.delete('/:configurationId', (req, res) => {
  try {
    Configuration.delete(req.params.configurationId)
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router
