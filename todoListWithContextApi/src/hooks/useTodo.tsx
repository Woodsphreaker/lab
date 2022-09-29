import { useContext } from 'react'
import { TodoContext, TodoContextProps } from '../context/todo'

function useTodo(): TodoContextProps {
  return useContext(TodoContext)
}

export { useTodo }
