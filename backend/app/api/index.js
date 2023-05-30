const { Router } = require('express')
const ThemesRouter = require('./themes')
const UserRouter = require('./users')
const ConfigurationRouter = require('./configuration')
const QuestionRouter = require('./quizzes/questions')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/themes', ThemesRouter)
router.use('/users', UserRouter)
router.use('/configuration', ConfigurationRouter)
router.use('/questions', QuestionRouter)

module.exports = router
