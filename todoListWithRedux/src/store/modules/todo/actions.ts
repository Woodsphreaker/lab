interface EditTodo {
  id: number
  taskName: string
}

const addTodo = (todo: string) => {
  return {
    type: '@todo/Add',
    payload: {
      taskName: todo,
    },
  }
}

const doneTodo = (id: number) => {
  return {
    type: '@todo/doneTodo',
    payload: {
      id,
    },
  }
}

const removeTodo = (id: number) => {
  return {
    type: '@todo/removeTodo',
    payload: {
      id,
    },
  }
}

const editTodo = ({ id, taskName }: EditTodo) => {
  return {
    type: '@todo/editTodo',
    payload: {
      id,
      taskName,
    },
  }
}

export { addTodo, doneTodo, removeTodo, editTodo }
