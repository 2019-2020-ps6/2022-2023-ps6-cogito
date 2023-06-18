const { Router } = require('express')

const { Quiz } = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')
const {
  buildQuiz,
  buildQuizzes,
  findThemeQuizzes,
  createQuiz,
  updateQuiz,
} = require('./manager')

const router = new Router({ mergeParams: true })

router.get('/', (req, res) => {
  try {
    res.status(200).json(buildQuizzes())
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:quizId', (req, res) => {
  try {
    const quiz = Quiz.getById(req.params.quizId)
    res.status(200).json(buildQuiz(quiz))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/theme/:themeId', (req, res) => {
  try {
    res.status(200).json(findThemeQuizzes(req.params.themeId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
  try {
    if(req.body.themeId === undefined){
      req.body.themeId = 0;
    }
    res.status(201).json(createQuiz({ ...req.body }))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:quizId', (req, res) => {
  try {
    res.status(200).json(updateQuiz(req.params.quizId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:quizId', (req, res) => {
  try {
    Quiz.delete(req.params.quizId)
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router
