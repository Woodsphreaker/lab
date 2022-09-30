type ReducerActions =
  | '@todo/Add'
  | '@todo/doneTodo'
  | '@todo/editTodo'
  | '@todo/removeTodo'
  | '@todo/filterTodo'
  | '@todo/clearTodos'

export type ReducerSagaActions = '@todo/async'

export type TodoStateTypes = 'all' | 'pending' | 'done'

export interface Todos {
  id: number
  taskName: string
  done?: boolean
}

export interface TodosState {
  all: number
  pending: number
  done: number
}

export interface ReducerProps {
  type: ReducerActions
  payload: {
    todo: Todos
    todosState?: TodoStateTypes
  }
}

export interface ReducerState {
  todos: Todos[]
  todosState?: TodosState
}

export enum ActionsTypes {
  ADD = '@todo/Add',
  DONE = '@todo/doneTodo',
  EDIT = '@todo/editTodo',
  REMOVE = '@todo/removeTodo',
  FILTER = '@todo/filterTodo',
  CLEAR = '@todo/clearTodos',
  SAGA = '@todo/async',
}

export interface TodosStore {
  todoReducer: ReducerState
}
