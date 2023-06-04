const { Router } = require('express')

const { Answer, Quiz, Question } = require('../../../models')
const manageAllErrors = require('../../../utils/routes/error-management')
const AnswersRouter = require('./answers')
const { filterQuestionsFromQuizz, getQuestionFromQuiz } = require('./manager')

const router = new Router({ mergeParams: true })


/**
 * Get all questions from a quiz
 */

router.get('/quiz/:quizId', (req, res) => {
  console.log(req.params)
  try {
    // Check if quizId exists, if not it will throw a NotFoundError
    Quiz.getById(req.params.quizId)
    res.status(200).json(filterQuestionsFromQuizz(req.params.quizId))
  } catch (err) {
    console.log(err);
    manageAllErrors(res, err)
  }
})

/**
 * Get one question with id
 */
router.get('/question/:questionId', (req, res) => {
  try {
    const question = Question.getById(req.params.questionId)
    res.status(200).json(question)
  } catch (err) {
    console.log(err)
    manageAllErrors(res, err)
  }
})

/**
 * Create a question for a quiz
 */
router.post('/quiz/:quizId', (req, res) => {
  console.log(req.params)
  try {
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

/**
 * Update a question
 */
router.put('/question/:questionId', (req, res) => {
  try {
    const question = Question.getById(req.params.questionId)
    Question.update(req.params.questionId, req.body)
    res.status(200).json(question)
  } catch (err) {
    console.log(err);
    manageAllErrors(res, err)
  }
})

/**
 * Delete a question
 */
router.delete('/question/:questionId', (req, res) => {
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
