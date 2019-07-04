import React from 'react';
import { Route } from 'react-router'
import './App.css';
import Home from './components/home'
import Test from './components/test'

function App() {
  return (
    <div className="App">
      <span>dit is :</span>
      <Route exact path='/' component={Home} />
      <Route exact path='/test' component={Test} />
    </div>
  );
}

export default App;
