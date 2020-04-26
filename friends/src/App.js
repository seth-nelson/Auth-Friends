import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import FriendsList from './components/FriendsList';

const App = () => {
  return (
    <div className="app-container">
      <div className='home-header'>
        <h1>Home</h1>
      </div>
        <div className='friends-list-container'>
          <PrivateRoute path='home' component={FriendsList} />
          <Route path='/login' component={Login} />
        </div>
    </div>
  );
}

export default App;
