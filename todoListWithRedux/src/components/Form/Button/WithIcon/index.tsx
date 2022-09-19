import React, { HTMLProps } from 'react'

import { Container } from './styles'

interface ButtonWithIconProps extends HTMLProps<HTMLButtonElement> {
  children: React.ReactNode
}

function WithIcon({ children, ...props }: ButtonWithIconProps) {
  return (
    <Container>
      <button {...props} type="button">
        {children}
      </button>
    </Container>
  )
}

export { WithIcon as ButtonWithIcon }
