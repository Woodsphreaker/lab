import { ReducerState, Todos, TodosState } from './types'

export function getTodosState(todos: Todos[]): ReducerState {
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
