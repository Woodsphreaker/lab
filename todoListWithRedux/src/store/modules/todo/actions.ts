import { Todos, ActionsTypes, TodoStateTypes } from './types'

const addTodo = (taskName: string) => {
  return {
    type: ActionsTypes.ADD,
    payload: {
      todo: { taskName },
    },
  }
}

const doneTodo = (id: number) => {
  return {
    type: ActionsTypes.DONE,
    payload: {
      todo: { id },
    },
  }
}

const editTodo = ({ id, taskName }: Todos) => {
  return {
    type: ActionsTypes.EDIT,
    payload: {
      todo: { id, taskName },
    },
  }
}

const filterTodo = (todosState: TodoStateTypes) => {
  return {
    type: ActionsTypes.FILTER,
    payload: {
      todosState,
    },
  }
}

const clearAllTodos = () => {
  return {
    type: ActionsTypes.CLEAR,
    payload: {},
  }
}

const removeTodo = (id: number) => {
  return {
    type: ActionsTypes.REMOVE,
    payload: {
      todo: { id },
    },
  }
}

export { addTodo, doneTodo, editTodo, removeTodo, filterTodo, clearAllTodos }
