import { ItemContainer } from '../ItemContainer'
import { Item } from '../Item'
import { Container } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { TodosStore } from '../../../store/modules/todo/types'
import { doneTodo, removeTodo } from '../../../store/modules/todo/actions'
import { Component, useState } from 'react'

function List() {
  const dispatch = useDispatch()

  const handleStatusChange = (todoID: number) => {
    dispatch(doneTodo(todoID))
  }

  const handleRemoveTodo = (todoID: number) => {
    dispatch(removeTodo(todoID))
  }

  const { todos } = useSelector(({ todoReducer }: TodosStore) => todoReducer)

  return (
    <Container>
      {todos.map(({ id, taskName, done = false }) => (
        <ItemContainer key={id}>
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
