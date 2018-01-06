import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import Home from './containers/Home/Home';
import Podcasts from './containers/Podcasts/Podcasts';
import Meditations from './containers/Meditations/Meditations';
import Liturgies from './containers/Liturgies/Liturgies';
import Events from './containers/Events/Events';
import TopMenu from './TopMenu'
import SemanticExamples from './containers/SemanticExamples/SemanticExamples';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <TopMenu />
            <Route exact path="/" component={Home}/>
            <Route path="/podcasts" component={Podcasts}/>
            <Route path="/meditations" component={Meditations}/>
            <Route path="/liturgies" component={Liturgies}/>
            <Route path="/events" component={Events}/>
            <Route path="/semantic-examples" component={SemanticExamples}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
