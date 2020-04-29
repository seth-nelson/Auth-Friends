import React from 'react';
import { Route, Switch, } from 'react-router-dom';

import FriendsList from './components/FriendsList';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

import './App.css';


const App = () => {

  return (
        <div className="app-container">
          <div className='home-header'>
            <h1>Friends</h1>
          </div>
            <Switch>
              <PrivateRoute path='/protected' component={FriendsList} />
              <Route path='/login' component={Login} />
            </Switch>
        </div>
  );
}

export default App;
