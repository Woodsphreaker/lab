import { call, put } from 'redux-saga/effects'
import { serverMock } from '../../../services/api'
import { clearAllTodos } from './actions'
import { TodosState } from './types'

function* todoSagaAction() {
  try {
    console.log('start async action')
    yield call(serverMock)

    yield put(clearAllTodos())
    console.log('done async action')
  } catch (error) {}
}

export { todoSagaAction }
