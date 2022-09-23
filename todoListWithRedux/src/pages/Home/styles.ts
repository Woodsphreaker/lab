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
  padding: 50px 20px 20px 20px;
  z-index: 5;
`
