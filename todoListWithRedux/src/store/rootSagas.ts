import { all, takeLatest } from 'redux-saga/effects'
import { todoSagaAction } from './modules/todo/sagas'
import { ActionsTypes } from './modules/todo/types'

function* rootSaga() {
  yield all([takeLatest(ActionsTypes.SAGA, todoSagaAction)])
}

export { rootSaga }
