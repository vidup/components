import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

import TablesIndex from './containers/Tables';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Link to="/tables" />
          <Link to="/forms" />
          <Link to="/modals" />
        </div>
        <div className="App-body">
          <Switch>
            <Route exact path="/tables" component={TablesIndex} />
            <Route exact path="/forms" component={TablesIndex} />
            <Route exact path="/modals" component={TablesIndex} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
