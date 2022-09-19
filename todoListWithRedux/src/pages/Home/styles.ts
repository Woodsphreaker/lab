import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  width: 100%;
  height: 100%;
  min-height: 400px;
  border-radius: 30px 30px 0 0;
  margin-top: -30px;
  padding: 20px;
`

export const TaskItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 500px;
  min-width: 450px;
  min-height: 50px;
  padding: 20px;

  & + div {
    border-top: 1px solid var(--text);
  }

  background-color: var(--footer-background);
`

export const TaskActionsContainer = styled.div`
  display: flex;
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

export const TaskInput = styled.div`
  display: flex;
  flex: 1;
  margin-left: 15px;
  color: var(--text);
  text-decoration: line-through;
`
