import { Home } from './pages/Home'
import { AppContainer } from './pages/Shared/AppContainer'
import GlobalStyles from './styles/globalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>{<Home />}</AppContainer>
    </>
  )
}

export default App
