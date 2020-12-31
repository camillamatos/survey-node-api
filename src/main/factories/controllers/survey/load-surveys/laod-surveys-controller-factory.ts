import { LoadSurveysController } from '@/presentation/controllers/survey/load-surveys/laod-surveys-controller'
import { Controller } from '@/presentation/protocols'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { makeDbLoadSurveys } from '@/main/factories/usecases/survey/load-surveys/db-load-surveys-factory'

export const makeLoadSurveysController = (): Controller => {
  return makeLogControllerDecorator(new LoadSurveysController(makeDbLoadSurveys()))
}
