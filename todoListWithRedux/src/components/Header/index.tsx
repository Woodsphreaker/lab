import { useState } from 'react'
import { FaTasks } from 'react-icons/fa'
import { TaskInput } from '../TaskInput'

import { useDispatch } from 'react-redux'
import { filterTodo } from '../../store/modules/todo/actions'
import {
  Container,
  AppDescription,
  TasksResume,
  TasksContainer,
  Task,
} from './styles'

import { useSelector } from 'react-redux'
import { TodosStore, TodoStateTypes } from '../../store/modules/todo/types'

function Header() {
  const [activeFilter, setActiveFilter] = useState<TodoStateTypes>('all')
  const dispatch = useDispatch()

  const handleFilter = (filter: TodoStateTypes) => () => {
    setActiveFilter(filter)
    dispatch({ type: '@todo/async' })
  }

  const { todosState } = useSelector(
    ({ todoReducer }: TodosStore) => todoReducer
  )

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
            <p>{todosState?.all.toString().padStart(2, '0')}</p>
            <span>tasks</span>
          </Task>
          <Task
            active={activeFilter === 'pending'}
            onClick={handleFilter('pending')}
          >
            <p>{todosState?.pending.toString().padStart(2, '0')}</p>
            <span>pending</span>
          </Task>
          <Task active={activeFilter === 'done'} onClick={handleFilter('done')}>
            <p>{todosState?.done.toString().padStart(2, '0')}</p>
            <span>completed</span>
          </Task>
        </TasksContainer>
      </TasksResume>
      <TaskInput />
    </Container>
  )
}

export { Header }
