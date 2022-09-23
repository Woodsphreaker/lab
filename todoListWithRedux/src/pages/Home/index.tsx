import React from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { FaTrash, FaPen } from 'react-icons/fa'

import { Container, Main } from './styles'
import { ButtonWithIcon } from '../../components/Form/Button/WithIcon'
import { List } from '../../components/TaskList/List'
import { TaskInput } from '../../components/TaskInput'

function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <List />
      </Main>
      <Footer />
    </Container>
  )
}

export { Home }
