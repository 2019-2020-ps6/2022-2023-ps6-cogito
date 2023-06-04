const NotFoundError = require('../../../utils/errors/not-found-error.js')
const { Quiz, Question} = require('../../../models')


/**
 * Questions Manager.
 * This file contains all the logic needed to by the question routes.
 */

/**
 * filterQuestionsFromQuizz.
 * This function filters among the questions to return only the question linked with the given quizId.
 * @param quizId
 */
const filterQuestionsFromQuizz = (quizId) => {
  const parsedId = parseInt(quizId, 10)
  const quiz = Quiz.getById(parsedId)
  const questions = Question.get()
  console.log(questions)
  const filteredQuestions = questions.filter((question) => quiz.questionList.includes(question.id))
  return filteredQuestions
}

/**
 * getQuestionFromQuiz.
 * This function retrieves a question from a quiz. It will throw a not found exception if the quizId in the question is different from the one provided in parameter.
 * @param quizId
 * @param questionId
 */
const getQuestionFromQuiz = (quizId, questionId) => {
  // Check if quizId exists, if not it will throw a NotFoundError
  const quiz = Quiz.getById(quizId)
  const quizIdInt = parseInt(quizId, 10)
  const question = Question.getById(questionId)
  if (question.quizId !== quizIdInt) throw new NotFoundError(`${question.name} id=${questionId} was not found for ${quiz.name} id=${quiz.id} : not found`)
  return question
}


module.exports = {
  filterQuestionsFromQuizz,
  getQuestionFromQuiz,
}
