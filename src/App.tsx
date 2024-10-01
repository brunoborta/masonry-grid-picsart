import Grid from './components/Grid';
import GlobalStyle from './GlobalStyles';
import { ModalProvider } from './hooks/providers/modalProvider';

function App() {

  return (
    <ModalProvider>
      <GlobalStyle />
      <Grid />
    </ModalProvider>
  )
}

export default App
