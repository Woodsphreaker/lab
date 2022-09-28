import React, { FormEvent, useState, useRef } from 'react'

import { Container, TaskDescription } from './styles'

import { useDispatch } from 'react-redux'
import { editTodo } from '../../../store/modules/todo/actions'

interface ItemEditProps {
  taskId: number
  taskName: string
  onEndEditing: () => void
}

function ItemEdit({ taskId, taskName, onEndEditing }: ItemEditProps) {
  const [taskDescription, setTaskDescription] = useState(taskName)
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()

  const handleChangeText = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    const { value: inputValue } = currentTarget
    setTaskDescription(inputValue)
  }

  const handleEdit = () => {
    if (!taskDescription) {
      inputRef.current?.focus()
      return null
    }

    dispatch(editTodo({ id: taskId, taskName: taskDescription }))
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
