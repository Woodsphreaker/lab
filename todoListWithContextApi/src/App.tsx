import { TodoProvider } from './context/todo'
import { Home } from './pages/Home'
import { AppContainer } from './pages/Shared/AppContainer'
import GlobalStyles from './styles/globalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <TodoProvider>
        <AppContainer>{<Home />}</AppContainer>
      </TodoProvider>
    </>
  )
}

export default App
