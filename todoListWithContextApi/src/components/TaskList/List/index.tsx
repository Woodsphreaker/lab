import React, { useContext } from 'react'
import { ItemContainer } from '../ItemContainer'
import { Item } from '../Item'

import { TodoContext } from '../../../context/todo'

import { Container } from './styles'

function List() {
  const { todos, doneTodo, removeTodo } = useContext(TodoContext)
  const handleStatusChange = (taskID: number) => doneTodo({ id: taskID })
  const handleRemoveTodo = (taskID: number) => removeTodo({ id: taskID })

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
