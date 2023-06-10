const { Quiz, Theme } = require('../../models')
const { findQuizQuestions } = require('./questions/manager')

/**
 * Function buildQuiz.
 * This function add a questionList to the quiz to fit frontend model.
 * @param quiz the backed quiz to build
 */
const buildQuiz = (quiz) => {
  const questionList = findQuizQuestions(quiz.id)
  return { ...quiz, questionList }
}

/**
 * Function buildQuizzes.
 * This function get all quizzes from database and build it to fit frontend quiz.
 */
const buildQuizzes = () => {
  const quizzes = Quiz.get()
  return quizzes.map((quiz) => buildQuiz(quiz))
}

const findThemeQuizzes = (themeId) => {
  // Check parameters type
  const newThemeId = (typeof themeId === 'string') ? parseInt(themeId, 10) : themeId

  const quizList = Quiz.get()
  const quizzes = quizList.filter((quiz) => quiz.themeId === newThemeId)
  return quizzes.map((quiz) => buildQuiz(quiz))
}

const checkQuiz = (quiz) => {
  // Check if existing properties are correct
  if (quiz.themeId) Theme.getById(quiz.themeId)

  // Remove properties that are not in backend Question
  const { questionList, ...newQuiz } = quiz
  return newQuiz
}

const createQuiz = (quiz) => {
  const newQuiz = checkQuiz(quiz)
  return buildQuiz(Quiz.create(newQuiz))
}

const updateQuiz = (quizId, quiz) => {
  const newQuiz = checkQuiz(quiz)
  return buildQuiz(Quiz.update(quizId, newQuiz))
}

module.exports = {
  buildQuiz,
  buildQuizzes,
  findThemeQuizzes,
  createQuiz,
  updateQuiz,
}
