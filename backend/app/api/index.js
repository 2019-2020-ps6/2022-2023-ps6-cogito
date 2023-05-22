const { Router } = require('express')
const ThemesRouter = require('./themes')
const QuizzesRouter = require('./quizzes')
const UserRouter = require('./users')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/themes', ThemesRouter)
router.use('/users', UserRouter)
router.use('/quizzes', QuizzesRouter)

module.exports = router
