import styled from 'styled-components'

interface TaskInputProps {
  done?: boolean
}

export const Container = styled.div`
  display: flex;
`

export const TaskActionsContainer = styled.div`
  opacity: 0;

  transition: opacity 0.2s;
`

export const TaskAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > input[type='checkbox'] {
    width: 20px;
    height: 20px;
    opacity: 0.8;
  }
`

export const TaskInput = styled.div<TaskInputProps>`
  display: flex;
  flex: 1;
  margin-left: 15px;

  > span {
    color: var(--text);
    text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
  }
`
