import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  min-width: 450px;
  min-height: 50px;
  padding: 20px;
  background-color: var(--footer-background);

  & + div {
    border-top: 1px solid var(--text);
  }

  :first-child {
    border-radius: 5px 5px 0 0;
  }

  :last-child {
    border-radius: 0 0 5px 5px;
  }

  cursor: pointer;

  :hover {
    background-color: var(--appLogo);
    .actionsContainer {
      opacity: 1;
    }
  }
`
