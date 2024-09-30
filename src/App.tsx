import Grid from './components/Grid';
import { ModalProvider } from './hooks/providers/modalProvider';

function App() {

  return (
    <ModalProvider>
      <Grid />
    </ModalProvider>
  )
}

export default App
