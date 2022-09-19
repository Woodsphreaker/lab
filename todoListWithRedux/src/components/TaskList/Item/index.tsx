import React from 'react'
import { ButtonWithIcon } from '../../Form/Button/WithIcon'
import { FaTrash, FaPen } from 'react-icons/fa'

import { TaskAction, TaskInput, TaskActionsContainer } from './styles'

function Item() {
  return (
    <>
      <TaskAction>
        <input type="checkbox" />
      </TaskAction>
      <TaskInput done={!!Math.floor(Math.random() * 10)}>
        <span>Lorem Ipsum Dolor</span>
      </TaskInput>
      <TaskActionsContainer className="actionsContainer">
        <TaskAction>
          <ButtonWithIcon>
            <FaTrash size={15} color="var(--white)" />
          </ButtonWithIcon>
          <ButtonWithIcon>
            <FaPen size={15} color="var(--white)" />
          </ButtonWithIcon>
        </TaskAction>
      </TaskActionsContainer>
    </>
  )
}

export { Item }
