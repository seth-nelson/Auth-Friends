import React, { useState } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';


const Login = props => {

    // const createLogin = useContext(CredentialsContext)
    //set up context API if necessary

    const [ credentials, setCredentials ] = useState({
        username: '',
        password: ''
    })

    const handleChanges = e => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/login', credentials)
            .then(result => {
                console.log('Login.js: login res success', result.data);
            localStorage.setItem('token', result.data.payload);
            props.history.push('/friendsList')
            })
            .catch(err => console.log('error with post', err))
    };


    return (
        <div className='login-form'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} >
                <input 
                    type='text'
                    name='username'
                    value={credentials.username}
                    placeholder='Username'
                    onChange={handleChanges}
                />
                <input 
                    type='password'
                    name='password'
                    value={credentials.password}
                    placeholder='Password'
                    onChange={handleChanges}
                />
                <button type='submit'>Sign In</button>
            </form>
        </div>
    );
}


export default Login;