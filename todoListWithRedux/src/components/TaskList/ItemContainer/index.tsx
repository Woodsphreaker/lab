import React from 'react'

import { Container } from './styles'

interface BaseProps {
  children: React.ReactNode
}

function ItemContainer({ children }: BaseProps) {
  return <Container>{children}</Container>
}

export { ItemContainer }
