import Grid from './components/Grid';
import GlobalStyle from './GlobalStyles';
import { LoaderProvider } from './hooks/providers/loaderProvider';
import { ModalProvider } from './hooks/providers/modalProvider';

function App() {

  return (
    <ModalProvider>
      <LoaderProvider>
        <GlobalStyle />
        <Grid />
      </LoaderProvider>
    </ModalProvider>
  )
}

export default App
