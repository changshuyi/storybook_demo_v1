import { ThemeProvider } from 'styled-components';
import './App.css';
import Button from './components/button/Button';
import theme from './theme/index';

function App() {
  return (
    <ThemeProvider theme={theme.default}>
      <div className="App">
        <Button onClick={() => {}}>Button</Button>
        <Button isLoading onClick={() => {}}>
          Button
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
