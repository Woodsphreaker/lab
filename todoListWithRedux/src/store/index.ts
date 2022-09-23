import { legacy_createStore as createStore } from 'redux'

import { todoReducer } from './modules/todo/reducer'

const store = createStore(todoReducer)

export { store }
