import { Home } from './pages/Home'
import { AppContainer } from './pages/Shared/AppContainer'
import GlobalStyles from './styles/globalStyles'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <AppContainer>{<Home />}</AppContainer>
      </Provider>
    </>
  )
}

export default App
