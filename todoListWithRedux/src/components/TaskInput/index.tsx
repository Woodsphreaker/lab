import { FormEvent, useState, useRef } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/modules/todo/actions'

import { Container, ActionContainer, TaskDescription } from './style'

function TaskInput() {
  const [taskDescription, setTaskDescription] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChangeText = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    const { value: inputValue } = currentTarget
    setTaskDescription(inputValue)
  }
  const dispatch = useDispatch()

  const handleTaskAdd = () => {
    if (!taskDescription) {
      return inputRef.current?.focus()
    }
    dispatch(addTodo(taskDescription))
    setTaskDescription('')
  }

  const handleKeypress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event
    if (key === 'Enter') {
      handleTaskAdd()
    }
  }

  return (
    <Container>
      <ActionContainer hasTextInField={!!taskDescription}>
        <button type="button" onClick={handleTaskAdd}>
          <FaPlus />
        </button>
      </ActionContainer>
      <TaskDescription>
        <input
          ref={inputRef}
          type="text"
          value={taskDescription}
          placeholder="Add new task ..."
          spellCheck={false}
          onChange={handleChangeText}
          onKeyDown={handleKeypress}
        />
      </TaskDescription>
    </Container>
  )
}

export { TaskInput }
