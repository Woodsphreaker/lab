import { combineReducers, applyMiddleware } from 'redux'
import { todoReducer } from './modules/todo/reducer'
const rootReducer = combineReducers({ todoReducer })

export { rootReducer }
