import { useState } from 'react'
import { FaTasks } from 'react-icons/fa'
import { useTodo } from '../../hooks'
import { TaskInput } from '../TaskInput'
import {
  Container,
  AppDescription,
  TasksResume,
  TasksContainer,
  Task,
} from './styles'

type ActiveFilterProps = 'all' | 'pending' | 'completed'

function Header() {
  const [activeFilter, setActiveFilter] = useState<ActiveFilterProps>('all')

  const handleFilter = (filter: ActiveFilterProps) => () => {
    setActiveFilter(filter)
  }

  const { todosState } = useTodo()
  console.log('reder Header')

  return (
    <Container>
      <AppDescription>
        <FaTasks />
        <h2>Simple Task List (With Context Api)</h2>
      </AppDescription>

      <TasksResume>
        <span>My Tasks</span>
        <TasksContainer>
          <Task active={activeFilter === 'all'} onClick={handleFilter('all')}>
            <p>{todosState?.all?.toString().padStart(2, '0')}</p>
            <span>tasks</span>
          </Task>
          <Task
            active={activeFilter === 'pending'}
            onClick={handleFilter('pending')}
          >
            <p>{todosState?.pending?.toString().padStart(2, '0')}</p>
            <span>pending</span>
          </Task>
          <Task
            active={activeFilter === 'completed'}
            onClick={handleFilter('completed')}
          >
            <p>{todosState?.done?.toString().padStart(2, '0')}</p>
            <span>completed</span>
          </Task>
        </TasksContainer>
      </TasksResume>
      <TaskInput />
    </Container>
  )
}

export { Header }
