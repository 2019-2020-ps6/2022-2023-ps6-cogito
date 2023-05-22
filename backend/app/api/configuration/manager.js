import { Configuration } from '../../models'

/**
 * Function buildQuizz.
 * This function aggregates the questions and answers from the database to build a quizz with all the data needed by the clients.
 * @param quizId
 */
const buildConfiguration = (configurationName) => {
  const configuration = Configuration.getById(configurationName)
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
    return configurations.map((configuration) => buildQuizz(configuration.name))
}

export default {
  buildConfiguration,
  buildConfigurations,
}
