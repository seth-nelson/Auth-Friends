import React, { useState, useEffect } from 'react';
import FriendsContext from './context/FriendsContext';
import axios from 'axios';

import FriendsList from './components/FriendsList';

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
    <FriendsContext.Provider value={{ friends, setFriends }}>
      <div className="app-container">
        <div className='home-header'>
          <h1>Friends</h1>
        </div>
          <div className='friends-list-container'>
            <FriendsList />
          </div>
      </div>
      </FriendsContext.Provider>
  );
}

export default App;


{/* <Switch>
              <PrivateRoute path='/home' component={FriendsList} />
              <Route path='/login' component={Login} />
              <Route component={Login} />
            </Switch> */}
