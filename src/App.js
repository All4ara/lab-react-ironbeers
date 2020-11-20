import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Route, Switch, Link } from 'react-router-dom'
import './App.css';
import Home from './Home.js'
import AllBeers from './AllBeers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';


function App() {
  return (
    <>
      <Switch>
                <Route exact path='/' render={(props) => <Home {...props}/>} />

                <Route exact path='/all' render={(props) => <AllBeers {...props} />} />

                <Route exact path='/random' render={(props) => <RandomBeer {...props} />} />

                <Route exact path='/new' render={(props) => <NewBeer {...props} />} />
      </Switch>
    </>
  );
}

export default App;
