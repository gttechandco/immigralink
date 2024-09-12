import './App.css';
import { ApplicationRouter } from './config';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider>
      <div className="App">
        <ApplicationRouter />
      </div>
    </SnackbarProvider>
    
  );
}

export default App;
