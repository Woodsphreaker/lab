import { generateRandomNumbers } from '../../../utils/generateRandomNumbers'

interface Todos {
  id: number
  taskName: string
  done?: boolean
}

interface TodosState {
  all: number
  pending: number
  done: number
}

type ReducerProps = {
  type: '@todo/Add' | '@todo/doneTodo' | '@todo/removeTodo'
  payload: Todos
}

export type ReducerState = {
  todos: Todos[]
  todosState?: TodosState
}

const INITIAL_STATE = {
  todos: [],
  todosState: { all: 0, done: 0, pending: 0 },
}

const getTodosState = (todos: Todos[]): ReducerState => {
  const todosState = todos.reduce(
    (acc: TodosState, todo) => {
      if (todo.done) {
        acc.done += 1
      }

      if (!todo.done) {
        acc.pending += 1
      }

      acc.all += 1
      return acc
    },
    { all: 0, done: 0, pending: 0 }
  )

  return {
    todos,
    todosState,
  }
}

function todoReducer(
  state = INITIAL_STATE as ReducerState,
  action: ReducerProps
) {
  const { type } = action

  const actions = {
    '@todo/Add': (): ReducerState => {
      const {
        payload: { taskName },
      } = action
      const todos = [
        ...state.todos,
        { id: generateRandomNumbers(), taskName, done: false },
      ]
      return getTodosState(todos)
    },
    '@todo/doneTodo': (): ReducerState => {
      const {
        payload: { id },
      } = action

      const todos = state.todos.map((todo) => {
        return {
          ...todo,
          done: todo.id === id ? !todo.done : todo.done,
        }
      })
      return getTodosState(todos)
    },
    '@todo/removeTodo': (): ReducerState => {
      const {
        payload: { id },
      } = action

      const todos = state.todos.filter((todo) => todo.id !== id)
      return getTodosState(todos)
    },
    default: (): ReducerState => state,
  }

  return (actions[type] || actions.default)()
}

export { todoReducer }
