import React, { useState, useEffect } from 'react';
import FriendsContext from './context/FriendsContext';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';

import FriendsList from './components/FriendsList';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

import axios from 'axios';
import './App.css';


const App = () => {

  const [ friends, setFriends ] = useState([]);

  useEffect(() => {
    axios 
      .get('http://localhost:5000/api/friends')
      .then(response => {
        setFriends(response.data);
        console.log('pulled data successfully', response);
      })
      .catch(error => {
        console.log('error pulling data', error);
      })
  }, []);

  return (
    <Router>
      <FriendsContext.Provider value={{ friends, setFriends }}>
        <div className="app-container">
          <div className='home-header'>
            <h1>Friends</h1>
          </div>
            <Switch>
              <PrivateRoute exact path='/protected' component={FriendsList} />
              <Route path='/login' component={Login} />
              <Redirect to='/login'/>
            </Switch>
        </div>
        </FriendsContext.Provider>
    </Router>
  );
}

export default App;
