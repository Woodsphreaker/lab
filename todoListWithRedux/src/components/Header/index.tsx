import React from 'react'
import { FaTasks } from 'react-icons/fa'
import {
  Container,
  AppDescription,
  TasksResume,
  TasksContainer,
  Task,
} from './styles'

function Header() {
  return (
    <Container>
      <AppDescription>
        <FaTasks />
        <h2>Simple Task List</h2>
      </AppDescription>

      <TasksResume>
        <span>My Tasks</span>
        <TasksContainer>
          <Task active={true}>
            <p>{'10'.padStart(2, '0')}</p>
            <span>tasks</span>
          </Task>
          <Task>
            <p>{'4'.padStart(2, '0')}</p>
            <span>pending</span>
          </Task>
          <Task>
            <p>{'6'.padStart(2, '0')}</p>
            <span>completed</span>
          </Task>
        </TasksContainer>
      </TasksResume>
    </Container>
  )
}

export { Header }
