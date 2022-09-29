import React, { FormEvent, useState, useRef } from 'react'
import { useTodo } from '../../../hooks'

import { Container, TaskDescription } from './styes'

interface ItemEditProps {
  taskId: number
  taskName: string
  onEndEditing: () => void
}

function ItemEdit({ taskId, taskName, onEndEditing }: ItemEditProps) {
  const [taskDescription, setTaskDescription] = useState(taskName)
  const inputRef = useRef<HTMLInputElement>(null)
  const { editTodo } = useTodo()

  const handleChangeText = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    const { value: inputValue } = currentTarget
    setTaskDescription(inputValue)
  }

  const handleEdit = () => {
    if (!taskDescription) {
      inputRef.current?.focus()
      return null
    }
    editTodo({ id: taskId, taskName: taskDescription })
    onEndEditing()
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event
    if (key === 'Enter') {
      handleEdit()
    }
  }

  return (
    <Container>
      <TaskDescription>
        <input
          type="text"
          value={taskDescription}
          onChange={handleChangeText}
          onKeyDown={handleKeyPress}
          ref={inputRef}
        />
      </TaskDescription>
    </Container>
  )
}

export { ItemEdit }
