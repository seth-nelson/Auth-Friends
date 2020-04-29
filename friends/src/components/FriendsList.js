import React, { useState, useEffect } from 'react';
import Friend from './Friend';
import AddFriend from './AddFriend';

import axiosWithAuth from '../utils/axiosWithAuth';


const FriendsList = () => {

    const [ friends, setFriends ] = useState([]);
    const [ update, setUpdate ] = useState(0)

    useEffect(() => {

        axiosWithAuth() 
            .get('http://localhost:5000/api/friends')
            .then(res => {
                setFriends(res.data);
                console.log('pulled data successfully', res);
            })
            .catch(error => {
                console.error('error pulling data', error);
            })
    }, [update]);


    return (
        <div className='friends-list-container'>
            <h2>The Crew</h2>
            <AddFriend setUpdate={setUpdate} update={update} />
            {friends.map(friend => {
                return <Friend key={friend.id} { ...friend } /> })}
        </div>
    );
}


export default FriendsList;