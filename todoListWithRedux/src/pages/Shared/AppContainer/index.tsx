import React from 'react'

import { Container } from './styles'

interface AppContainerProps {
  children: React.ReactNode
}

function AppContainer({ children }: AppContainerProps) {
  return <Container>{children}</Container>
}

export { AppContainer }
