const { Router } = require('express')
const ThemesRouter = require('./themes')
const ConfigurationRouter = require('./configuration')
const QuizzesRouter = require('./quizzes')
const QuestionRouter = require('./quizzes/questions')
const AnswerRouter = require('./quizzes/questions/answers')
const PatientRouter = require('./patients')
const GameQuizRouter = require('./gameQuiz')
const GameQuestionRouter = require('./gameQuiz/gameQuestions')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/themes', ThemesRouter)
router.use('/configuration', ConfigurationRouter)
router.use('/quizzes', QuizzesRouter)
router.use('/questions', QuestionRouter)
router.use('/answers', AnswerRouter)

router.use('/patients', PatientRouter)
router.use('/gameQuiz', GameQuizRouter)
router.use('/gameQuestions', GameQuestionRouter)

module.exports = router
