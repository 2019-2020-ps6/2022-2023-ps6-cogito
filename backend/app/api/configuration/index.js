const { Router } = require('express')

const { Configuration } = require('../../../models')
const manageAllErrors = require('../../../utils/routes/error-management')


const router = new Router({ mergeParams: true })

router.get('/', (res) => {
    try {
        res.status(200).json(Configuration.get())
    } catch (err) {
        manageAllErrors(res, err)
    }
})

router.get('/:configurationName', (req, res) => {
    try {
        console.log(req.params.configurationName)
        res.status(200).json(Configuration.getById(req.params.configurationName))
    } catch (err) {
        manageAllErrors(res, err)
    }
    
})

router.post('/', (req, res) => {
    try {
        const configuration = Configuration.create({ ...req.body })
        console.log(configuration)
        res.status(201).json(configuration)
    } catch (err) {
        manageAllErrors(res, err)
    }
})

router.put('/:configurationName', (req, res) => {
    try {
        console.log(req.params.configurationName)
        res.status(200).json(Configuration.update(req.params.configurationName, req.body))
    } catch (err) {
        manageAllErrors(res, err)
    }
})

router.delete('/:configurationName', (req, res) => {
    try {
        console.log(req.params.configurationName)
        Configuration.delete(req.params.configurationName)
        res.status(204).end()
    } catch (err) {
        manageAllErrors(res, err)
    }
})


module.exports = router
