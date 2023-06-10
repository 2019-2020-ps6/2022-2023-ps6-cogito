const { Quiz } = require('../../models')
const { filterQuestionsFromQuizz } = require('./questions/manager')
const { filterAnswersFromQuestion } = require('./questions/answers/manager')

/**
 * Function buildQuiz.
 * This function add a questionList to the quiz to fit frontend model.
 * @param quiz the backed quiz to build
 */
const buildQuiz = (quiz) => ({ ...quiz, questionList: [0] })

/**
 * Function buildQuizzes.
 * This function get all quizzes from database and build it to fit frontend quiz.
 */
const buildQuizzes = () => {
  const quizzes = Quiz.get()
  return quizzes.map((quiz) => buildQuiz(quiz))
}

const findThemeQuizzes = (themeId) => {
  const quizList = Quiz.get()
  const quizzes = quizList.filter((quiz) => quiz.themeId.toString() === themeId)
  return quizzes.map((quiz) => buildQuiz(quiz))
}

module.exports = {
  buildQuiz,
  buildQuizzes,
  findThemeQuizzes,
}
