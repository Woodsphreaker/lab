import styled from 'styled-components'

import headerBG from '../../assets/header-bg.svg'

interface TaskProps {
  active?: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 270px;
  background-color: var(--primary);
  background-image: url(${headerBG});
  background-position: bottom;
  background-size: cover;
  border-radius: 10px 10px 0 0;
  overflow: hidden;

  position: relative;
`

export const AppDescription = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;

  > h2 {
    color: var(--text);
    margin-left: 15px;
  }

  > svg {
    font-size: 30px;
    color: var(--appLogo);
  }
`

export const TasksResume = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;

  > span {
    color: var(--text);
    font-size: 0.8rem;
  }
`

export const TasksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  column-gap: 5px;
`

export const Task = styled.div<TaskProps>`
  height: 110px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--border-color-alpha50);
  background-color: ${({ active }) =>
    active ? 'var(--selected-task-filter)' : 'var(--white)'};
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: var(--selected-task-filter);
  }

  transition: background 0.5s;

  > p {
    font-size: 3rem;
  }

  > span {
    font-size: 0.7rem;
    text-transform: uppercase;
  }
`
