const { Router } = require('express')

const { Question } = require('../../../models')
const manageAllErrors = require('../../../utils/routes/error-management')
const { createAnswer } = require('./answers/manager')
const { createCorrecting } = require('./correctings/manager')
const {
  buildQuestion,
  buildQuestions,
  findQuizQuestions,
  createQuestion,
  updateQuestion,
} = require('./manager')

const router = new Router({ mergeParams: true })

router.get('/', (req, res) => {
  try {
    res.status(200).json(buildQuestions())
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:questionId', (req, res) => {
  try {
    const question = Question.getById(req.params.questionId)
    res.status(200).json(buildQuestion(question))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/quiz/:quizId', (req, res) => {
  try {
    res.status(200).json(findQuizQuestions(req.params.quizId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

/***
 * The front just has to send an object with all the requirements (question's body, correcting, answers) and a quizId
 */

router.post('/', (req, res) => {
  try {
    const question = {
      quizId: req.body.quizId,
      title: req.body.title,
      difficulty: req.body.difficulty,
      defaultMediaType: req.body.defaultMediaType,
      defaultAnswersMediaType: req.body.defaultAnswersMediaType,
      hint: req.body.hint,
      picture: req.body.picture,
      sound: req.body.sound,
    };
    const resQuestion = createQuestion(question);
    const answers = req.body.answers.map((answer) => {
      answer.questionId = resQuestion.id;
      return answer;
    });
    const resAnswers = [];

    answers.forEach(answer => {
      console.log(answer)
      resAnswers.push(createAnswer(answer));
    });

    resQuestion.answerList = resAnswers;
    if(req.body.correcting){
      const correcting = req.body.correcting;
      correcting.questionId = resQuestion.id
      const resCorrecting = createCorrecting(correcting);
      resQuestion.correcting = resCorrecting;
    }
    res.status(201).json(resQuestion);
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:questionId', (req, res) => {
  try {
    res.status(200).json(updateQuestion(req.params.questionId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:questionId', (req, res) => {
  try {
    Question.delete(req.params.questionId)
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router
