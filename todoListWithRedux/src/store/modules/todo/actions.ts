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

export { addTodo, doneTodo, removeTodo }
