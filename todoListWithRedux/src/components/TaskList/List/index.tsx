import React from 'react'
import { ItemContainer } from '../ItemContainer'
import { Item } from '../Item'

import { Container } from './styles'

import { useSelector, useDispatch } from 'react-redux'
import { ReducerState } from '../../../store/modules/todo/reducer'
import { doneTodo, removeTodo } from '../../../store/modules/todo/actions'

function List() {
  const dispatch = useDispatch()

  const handleStatusChange = (todoID: number) => {
    dispatch(doneTodo(todoID))
  }

  const handleRemoveTodo = (todoID: number) => {
    dispatch(removeTodo(todoID))
  }

  const todos = useSelector(({ todos }: ReducerState) => todos)
  return (
    <Container>
      {todos.map(({ id, taskName, done = false }) => (
        <ItemContainer>
          <Item
            taskId={id}
            taskName={taskName}
            done={done}
            handleStatusChange={handleStatusChange}
            handleRemoveTodo={handleRemoveTodo}
          />
        </ItemContainer>
      ))}
    </Container>
  )
}

export { List }
