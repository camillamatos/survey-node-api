import { LoadSurveysController } from '../../../../../presentation/controllers/survey/load-surveys/laod-surveys-controller'
import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/log-controller-decorator-factory'
import { makeDbLoadSurveys } from '../../../usecases/survey/load-surveys/db-load-surveys'

export const makeLoadSurveysController = (): Controller => {
  return makeLogControllerDecorator(new LoadSurveysController(makeDbLoadSurveys()))
}
