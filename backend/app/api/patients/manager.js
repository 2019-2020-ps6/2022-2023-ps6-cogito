const { Patient, Quiz } = require('../../models')




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
        if(q != [])
            quizzes.push(...q);
    }
    return quizzes
}

module.exports = {
    getAllQuizzesOfPatient
}
