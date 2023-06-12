const { Configuration } = require('../../models')
const NotFoundError = require('../../../../utils/errors/not-found-error.js')

/**
 * Function buildConfiguration.
 * This function aggregates the questions and answers from the database to build a quizz with all the data needed by the clients.
 * @param quizId
 */
const buildConfiguration = (configurationId) => {
  const configuration = Configuration.getById(configurationId)
  console.log(configuration)
  return  {...configuration}
}

/**
 * Function buildQuizzes.
 * This function aggregates the questions and answers from the database to build entire quizzes.
 */
const buildConfigurations = () => {
    const configurations = Configuration.get()
    console.log(configurations)
    return configurations.map((configuration) => buildConfiguration(configuration.id))
}

export default {
  buildConfiguration,
  buildConfigurations,
}
