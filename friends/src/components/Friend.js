import React from 'react';


const Friend = ({ name, age, email }) => {
    return (
        <div className='friend-card'>
            <h3>{name}</h3>
            <h5>Age: {age}</h5>
            <h5>Email: {email}</h5>
        </div>
    )
}


export default Friend;