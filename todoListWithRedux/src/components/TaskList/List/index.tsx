import React from 'react'
import { ItemContainer } from '../ItemContainer'
import { Item } from '../Item'

import { Container } from './styles'

function List() {
  return (
    <Container>
      {Array.from({ length: 15 }, () => (
        <ItemContainer>
          <Item />
        </ItemContainer>
      ))}
    </Container>
  )
}

export { List }
