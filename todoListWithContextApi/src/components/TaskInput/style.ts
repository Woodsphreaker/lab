import styled, { css } from 'styled-components'

interface ActionContainerProps {
  hasTextInField: boolean
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  border: 1px solid;
  max-width: 600px;
  min-width: 450px;
  margin-bottom: 10px;
  padding: 0 20px;
  position: absolute;
  background-color: var(--footer-background);
  border-color: var(--white);
  border-radius: 5px;

  bottom: -10px;
  z-index: 10;
`

export const ActionContainer = styled.div<ActionContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 2px dashed
    ${({ hasTextInField }) =>
      hasTextInField ? 'var(--secondary)' : 'var(--border-color-alpha50)'};
  border-radius: 50%;
  transition: border 0.5s;

  > button {
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: none;
    ${({ hasTextInField }) =>
      !hasTextInField &&
      css`
        cursor: default;
      `}
  }

  > button > svg {
    color: ${({ hasTextInField }) =>
      hasTextInField ? 'var(--secondary)' : 'var(--border-color-alpha50)'};
    font-size: 1.1rem;
    transition: color 0.5s;
  }
`

export const TaskDescription = styled.div`
  display: flex;
  flex: 1;
  margin-left: 15px;
  height: 40px;

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
