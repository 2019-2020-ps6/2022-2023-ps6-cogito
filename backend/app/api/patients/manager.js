const { Patient, Quiz } = require('../../models')
const {findQuizQuestions  } = require('../quizzes/questions/manager')


/**
 * return all the quizzes as an array of quiz of the patient 
 * function go through all the quizId present in the patient's quizIdList and find theme in the quiz database
 * @param {number} patientId 
 */
const getAllQuizzesOfPatient = (patientId) => {
    
    const patient = Patient.get().filter(p => p.id === parseInt(patientId))[0];
    const themeIds = patient.themeIdList;
    const quizzes = []
    for(let i = 0 ; i < themeIds.length; i++){
        const q = Quiz.get().filter((q) => q.themeId === themeIds[i]);
        if(q.length > 0){
            console.log(q[0]);
            console.log(findQuizQuestions(q[0].id))
            q[0].questionList = findQuizQuestions(q[0].id);
            for(let question of q[0].questionList){
                delete question.quizId;
            }
            quizzes.push(...q);
        }
    }
    return quizzes
}

module.exports = {
    getAllQuizzesOfPatient
}
