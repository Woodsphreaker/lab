import { createContext, useState } from 'react'
import { generateRandomNumbers } from '../../utils/generateRandomNumbers'

interface TodoProviderProps {
  children?: React.ReactNode
}

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

export interface TodoContextProps {
  todos: Todos[]
  todosState: TodosState
  addTodo: ({ taskName }: Omit<Todos, 'id'>) => void
  editTodo: ({ id, taskName }: Todos) => void
  removeTodo: ({ id }: Omit<Todos, 'taskName'>) => void
  doneTodo: ({ id }: Omit<Todos, 'taskName'>) => void
}

const INITIAL_STATE = {
  todos: [],
  todosState: { all: 0, done: 0, pending: 0 },
}

export const TodoContext = createContext({} as TodoContextProps)

function getTodosState(todos: Todos[]): TodosState {
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

  return todosState
}

function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<Todos[]>(INITIAL_STATE.todos)
  const [todosState, setTodosState] = useState<TodosState>(
    INITIAL_STATE.todosState
  )

  const addTodo = ({ taskName }: Omit<Todos, 'id'>) => {
    setTodos((currentTodos) => {
      const todos = [
        ...currentTodos,
        { id: generateRandomNumbers(), taskName, done: false },
      ]
      setTodosState(getTodosState(todos))
      return todos
    })
  }

  const editTodo = ({ id, taskName }: Todos) =>
    setTodos((currentTodos) =>
      currentTodos.map((todo) => ({
        ...todo,
        taskName: todo.id === id ? taskName : todo.taskName,
      }))
    )

  const removeTodo = ({ id }: Omit<Todos, 'taskName'>) => {
    setTodos((currentTodos) => {
      const todos = currentTodos.filter((todo) => todo.id !== id)
      setTodosState(getTodosState(todos))
      return todos
    })
  }
  const doneTodo = ({ id }: Omit<Todos, 'taskName'>) => {
    setTodos((currentTodos) => {
      const todos = currentTodos.map((todo) => ({
        ...todo,
        done: todo.id === id ? !todo.done : todo.done,
      }))
      setTodosState(getTodosState(todos))
      return todos
    })
  }

  return (
    <TodoContext.Provider
      value={{ todos, todosState, addTodo, editTodo, removeTodo, doneTodo }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export { TodoProvider }
