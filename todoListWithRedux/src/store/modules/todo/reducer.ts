import { generateRandomNumbers } from '../../../utils/generateRandomNumbers'
import { getTodosState } from './helpers'

import {
  ActionsTypes,
  ReducerProps,
  ReducerState,
  Todos,
  TodosState,
} from './types'

const INITIAL_STATE: ReducerState = {
  todos: [],
  todosState: { all: 0, done: 0, pending: 0 },
}

function todoReducer(state = INITIAL_STATE, action: ReducerProps) {
  const { type } = action

  const actions = {
    [ActionsTypes.ADD]: () => {
      const {
        payload: {
          todo: { taskName },
        },
      } = action
      const todos = [
        ...state.todos,
        { id: generateRandomNumbers(), taskName, done: false },
      ]
      return getTodosState(todos)
    },
    [ActionsTypes.DONE]: () => {
      const {
        payload: {
          todo: { id },
        },
      } = action

      const todos = state.todos.map((todo) => {
        return {
          ...todo,
          done: todo.id === id ? !todo.done : todo.done,
        }
      })
      return getTodosState(todos)
    },
    [ActionsTypes.REMOVE]: () => {
      const {
        payload: {
          todo: { id },
        },
      } = action

      const todos = state.todos.filter((todo) => todo.id !== id)
      return getTodosState(todos)
    },

    [ActionsTypes.EDIT]: () => {
      const {
        payload: {
          todo: { id, taskName },
        },
      } = action

      const todos = state.todos.map((todo) => ({
        ...todo,
        taskName: todo.id === id ? taskName : todo.taskName,
      }))

      return getTodosState(todos)
    },

    [ActionsTypes.FILTER]: () => {
      const {
        payload: { todosState },
      } = action

      return INITIAL_STATE
    },

    [ActionsTypes.CLEAR]: () => {
      return INITIAL_STATE
    },
    default: () => state,
  }

  return (actions[type] || actions.default)()
}

export { todoReducer }
