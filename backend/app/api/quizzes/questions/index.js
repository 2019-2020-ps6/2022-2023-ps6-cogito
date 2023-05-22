const { Router } = require('express')

const { Answer, Quiz, Question } = require('../../../models')
const manageAllErrors = require('../../../utils/routes/error-management')
const AnswersRouter = require('./answers')
const { filterQuestionsFromQuizz, getQuestionFromQuiz } = require('./manager')

const router = new Router({ mergeParams: true })

router.get('/', (req, res) => {
  console.log(req.params.quizId)
  try {
    // Check if quizId exists, if not it will throw a NotFoundError
    Quiz.getById(req.params.quizId)
    res.status(200).json(filterQuestionsFromQuizz(req.params.quizId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:questionId', (req, res) => {
  try {
    const question = getQuestionFromQuiz(req.params.quizId, req.params.questionId)
    res.status(200).json(question)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
  console.log(req.body)
  try {
    // Check if quizId exists, if not it will throw a NotFoundError
    const quiz = Quiz.getById(req.params.quizId)
    
    let question = Question.create({ ...req.body })
    quiz.questionList.push(question.id)
    Quiz.update(quiz.id,quiz)
    res.status(201).json(quiz)
  } catch (err) {
    console.log(err)
    manageAllErrors(res, err)
  }
})

router.put('/:questionId', (req, res) => {
  try {
    const quiz = Quiz.getById(req.params.quizId)
    const question = Question.getById(req.params.questionId)
    console.log(typeof quiz.questionList[0], typeof req.params.questionId, question.id)
    if(!quiz.questionList.includes(question.id)) manageAllErrors(res, {name: "NotFoundError"})
    else {
      Question.update(req.params.questionId, req.body)
      res.status(200).json(quiz)
    }
  } catch (err) {
    console.log(err);
    manageAllErrors(res, err)
  }
})

router.delete('/:questionId', (req, res) => {
  try {
    // Check if the question id exists & if the question has the same quizId as the one provided in the url.
    getQuestionFromQuiz(req.params.quizId, req.params.questionId)
    Question.delete(req.params.questionId)
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.use('/:questionId/answers', AnswersRouter)

module.exports = router
