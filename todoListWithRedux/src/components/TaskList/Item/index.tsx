import React, { useState } from 'react'
import { ButtonWithIcon } from '../../Form/Button/WithIcon'
import { FaTrash, FaPen } from 'react-icons/fa'

import { TaskAction, TaskInput, TaskActionsContainer } from './styles'
import { ItemEdit } from '../ItemEdit'

interface ItemProps {
  taskId: number
  taskName: string
  done: boolean
  handleStatusChange: (id: number) => void
  handleRemoveTodo: (id: number) => void
}

function Item({
  taskId,
  taskName = 'taskName',
  done,
  handleStatusChange,
  handleRemoveTodo,
}: ItemProps) {
  const [editMode, setEditMode] = useState(false)

  const handleEditMode = () => {
    setEditMode((currentState) => !currentState)
  }

  if (editMode) {
    return (
      <>
        <ItemEdit
          taskId={taskId}
          taskName={taskName}
          onEndEditing={handleEditMode}
        />
      </>
    )
  }

  return (
    <>
      <TaskAction>
        <input
          type="checkbox"
          checked={done}
          onChange={() => handleStatusChange(taskId)}
        />
      </TaskAction>
      <TaskInput done={done}>
        <span>{taskName}</span>
      </TaskInput>
      <TaskActionsContainer className="actionsContainer">
        <TaskAction>
          <ButtonWithIcon title="Edit Task" onClick={handleEditMode}>
            <FaPen size={15} color="var(--white)" />
          </ButtonWithIcon>

          <ButtonWithIcon
            title="Delete Task"
            onClick={() => handleRemoveTodo(taskId)}
          >
            <FaTrash size={15} color="var(--white)" />
          </ButtonWithIcon>
        </TaskAction>
      </TaskActionsContainer>
    </>
  )
}

export { Item }
