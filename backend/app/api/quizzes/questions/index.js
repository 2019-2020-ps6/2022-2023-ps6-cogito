const { Router } = require('express')

const { Question, Correcting, Answer } = require('../../../models')
const manageAllErrors = require('../../../utils/routes/error-management')
const { createAnswer, updateAnswer, findQuestionAnswers } = require('./answers/manager')  
const { createCorrecting, updateCorrecting, findQuestionCorrecting } = require('./correctings/manager')

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
    const answers = req.body.answerList.map((answer) => {
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
    console.log(err);
    manageAllErrors(res, err)
  }
})

router.put('/:questionId', (req, res) => {
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
    const resQuestion = updateQuestion(req.params.questionId, question);
    const answers = req.body.answerList.map((answer) => {
      answer.questionId = resQuestion.id;
      return answer;
    });
    const resAnswers = [];

    answers.forEach(answer => {
      console.log(answer)
      resAnswers.push(updateAnswer(answer.id, answer));
    });

    resQuestion.answerList = resAnswers;
    if(req.body.correcting){
      const correcting = req.body.correcting;
      correcting.questionId = resQuestion.id
      const resCorrecting = updateCorrecting(correcting.id, correcting);
      resQuestion.correcting = resCorrecting;
    }
    res.status(200).json(resQuestion)
  } catch (err) {
    console.log(err);
    manageAllErrors(res, err)
  }
})

router.delete('/:questionId', (req, res) => {
  try {
    Question.delete(req.params.questionId)
    const answers = findQuestionAnswers(req.params.questionId);
    const correcting = findQuestionCorrecting(req.params.questionId);
    if(answers){
      answers.forEach((answer) => {
        Answer.delete(answer.id)
      })
    }
    if(correcting)
      Correcting.delete(correcting);
    res.status(204).json(buildQuestions());
  } catch (err) {
    console.log(err);
    manageAllErrors(res, err)
  }
})

module.exports = router
