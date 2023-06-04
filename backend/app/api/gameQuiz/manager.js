const GameQuiz = require('../../models/gameQuiz.model')

const findGameQuizByPatient = (patientId) => {
  const gameQuizList = GameQuiz.get()
  return gameQuizList.filter((gameQuiz) => gameQuiz.patientId.toString() === patientId)
}

const findGameQuizByPatientAndQuiz = (patientId, quizId) => {
  const gameQuizList = GameQuiz.get()
  return gameQuizList.filter((gameQuiz) => gameQuiz.patientId.toString() === patientId && gameQuiz.quizId.toString() === quizId)
}

module.exports = {
  findGameQuizByPatient,
  findGameQuizByPatientAndQuiz,
}
