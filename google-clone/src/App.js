import logo from './logo.svg';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/search">
            <h1>This is the search page</h1>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
