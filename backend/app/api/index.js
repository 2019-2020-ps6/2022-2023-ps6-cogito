const { Router } = require('express')
const ThemesRouter = require('./themes')
const QuizzesRouter = require('./quizzes')
const PatientRouter = require('./patients')
const StatisticRouter = require('./statistics')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/themes', ThemesRouter)
router.use('/quizzes', QuizzesRouter)
router.use('/patients', PatientRouter)
router.use('/statistics', StatisticRouter)

module.exports = router
