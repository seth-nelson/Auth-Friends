import React, { useContext } from 'react';


const FriendsList = () => {

    const { friends } = useContext(setFriends);

    return (
        <h2>Friends... literally!</h2>
            <div className='friends-list-container'>
                {friends.map(person => <Friend key={person.id} {...person} /> )}
            </div>
    );
}


export default FriendsList;