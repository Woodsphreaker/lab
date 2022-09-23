import React from 'react'
import { ButtonWithIcon } from '../../Form/Button/WithIcon'
import { FaTrash, FaPen } from 'react-icons/fa'

import { TaskAction, TaskInput, TaskActionsContainer } from './styles'

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
          <ButtonWithIcon title="Edit Task">
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
