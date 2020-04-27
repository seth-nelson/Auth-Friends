import React, { useContext } from 'react';
import { FriendsContext } from '../context/FriendsContext';
import Friend from './Friend';


const FriendsList = () => {

    const { friends } = useContext(FriendsContext);

    return (
        <div className='friends-list-container'>
            <h2>The Crew</h2>
            {friends.map(person => <Friend key={person.id} {...person} /> )}
        </div>
    );
}


export default FriendsList;