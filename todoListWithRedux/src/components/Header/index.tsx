import { useState } from 'react'
import { FaTasks } from 'react-icons/fa'
import { TaskInput } from '../TaskInput'
import {
  Container,
  AppDescription,
  TasksResume,
  TasksContainer,
  Task,
} from './styles'

type ActiveFilterProps = 'all' | 'pending' | 'completed'

import { useSelector } from 'react-redux'
import { ReducerState } from '../../store/modules/todo/reducer'

function Header() {
  const [activeFilter, setActiveFilter] = useState<ActiveFilterProps>('all')

  const handleFilter = (filter: ActiveFilterProps) => () => {
    setActiveFilter(filter)
  }

  const todos = useSelector(({ todosState }: ReducerState) => todosState)

  return (
    <Container>
      <AppDescription>
        <FaTasks />
        <h2>Simple Task List (With Redux)</h2>
      </AppDescription>

      <TasksResume>
        <span>My Tasks</span>
        <TasksContainer>
          <Task active={activeFilter === 'all'} onClick={handleFilter('all')}>
            <p>{todos?.all.toString().padStart(2, '0')}</p>
            <span>tasks</span>
          </Task>
          <Task
            active={activeFilter === 'pending'}
            onClick={handleFilter('pending')}
          >
            <p>{todos?.pending.toString().padStart(2, '0')}</p>
            <span>pending</span>
          </Task>
          <Task
            active={activeFilter === 'completed'}
            onClick={handleFilter('completed')}
          >
            <p>{todos?.done.toString().padStart(2, '0')}</p>
            <span>completed</span>
          </Task>
        </TasksContainer>
      </TasksResume>
      <TaskInput />
    </Container>
  )
}

export { Header }
