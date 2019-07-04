// imports
// -npm
import React, { Component } from 'react';
import { Route } from 'react-router'
import { Provider } from 'react-redux'
// -componets
import Home from './components/home'
// -store
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route exact path='/' component={Home} />
        </div>
      </Provider>
    );
  }
}

export default App;
