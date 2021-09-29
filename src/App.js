import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Game from './screens/Game'
import MainMenu from './screens/MainMenu';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/sudoku">
          <Game />
        </Route>
        
        <Route path="/">
          <MainMenu />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
