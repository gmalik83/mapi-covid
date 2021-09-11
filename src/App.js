import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Covid from './components/Covid.js';
function App() {
  return (
    <div className='upper'>
      <Router>
        <Switch>
          <Route path='/find'>
            <Covid />
          </Route>
          <Route path='/'>
            =<Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
