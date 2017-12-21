import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import Home from './containers/Home/Home';
import Podcasts from './containers/Podcasts/Podcasts';
import Meditations from './containers/Meditations/Meditations';
import Liturgies from './containers/Liturgies/Liturgies';
import Events from './containers/Events/Events';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/podcasts" component={Podcasts}/>
            <Route path="/meditations" component={Meditations}/>
            <Route path="/liturgies" component={Liturgies}/>
            <Route path="/events" component={Events}/>
            <hr/>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/podcasts">Podcasts</Link></li>
              <li><Link to="/meditations">Meditations</Link></li>
              <li><Link to="/liturgies">Liturgies</Link></li>
              <li><Link to="/events">Events</Link></li>
            </ul>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
