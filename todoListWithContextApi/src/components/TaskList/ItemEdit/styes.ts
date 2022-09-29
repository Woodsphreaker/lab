import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const TaskDescription = styled.div`
  display: flex;
  flex: 1;
  margin-left: 15px;
  height: auto;
  > input {
    width: 100%;
    outline: none;
    background-color: transparent;
    border: none;
    font-size: large;
    color: var(--text);
    ::placeholder {
      color: var(--border-color-alpha50);
    }
  }
`
