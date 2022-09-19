import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  border-radius: 0 0 10px 10px;
  background-color: var(--footer-background);

  > p {
    color: var(--text);
    font-size: 0.6rem;
    text-transform: uppercase;
  }
`
