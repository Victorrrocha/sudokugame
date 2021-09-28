import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import SelectProvider from './context/SelectProvider';

function App() {
  return (
    <div className="App">
      <h1 className="logo">Sudoku</h1>
      <SelectProvider>
        <Board />
        <Keyboard />
      </SelectProvider>
    </div>
  );
}

export default App;
