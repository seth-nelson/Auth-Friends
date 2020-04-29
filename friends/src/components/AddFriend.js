import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';


const AddFriend = props => {

    const [ newFriend, addNewFriend ] = useState({
        name: '',
        age: '',
        email: ''
    });

    const handleChanges = e => {
        addNewFriend({ ...newFriend, [e.target.name]: e.target.value });
    };

    let count = props.update

    const submitForm = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', newFriend)
            .then(res => console.log('new friend post', res.data))
            .catch(err => console.error('new friend post error', err))

        addNewFriend({ name: '', age: '', email: ''})
        props.setUpdate(count++);
        console.log('count', count);
    }       


    return (
        <div className='new-friend-form'>
            <h4>Add New Friend</h4>
            <form onSubmit={submitForm}>
                <input
                    type='text'
                    name='name'
                    value={newFriend.name}
                    placeholder='name'
                    onChange={handleChanges}
                />

                <input
                    type='number'
                    name='age'
                    value={newFriend.age}
                    placeholder='age'
                    onChange={handleChanges}
                />

                <input
                    type='text'
                    name='email'
                    value={newFriend.email}
                    placeholder='email'
                    onChange={handleChanges}
                />
                <button className='submitButton' type='submit'>Add Friend</button>
            </form>
        </div>
    )
}


export default AddFriend;