import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import Home from './containers/Home/Home';
import Podcasts from './containers/Podcasts/Podcasts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/podcasts" component={Podcasts}/>
            <hr/>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/podcasts">Podcasts</Link></li>
            </ul>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
