import React, { useState } from 'react';

import axios from 'axios';


const Login = () => {

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
        axios
            .post('http://localhost:5000/api/login', credentials)
            .then(result => {
                console.log('Login.js: login res success', result);
            localStorage.setItem('token', result.data.payload);
            })
            .catch(err => console.log('error with post', err))

    };


    return (
        <div className='login-form'>
            <h1>Login</h1>
            <form onSubmit={credentials} >
                <input 
                    type='text'
                    name='username'
                    value={credentials.username}
                    placeholder='Username'
                    onChange={handleChanges}
                />
                <input 
                    type='text'
                    name='password'
                    value={credentials.password}
                    placeholder='Password'
                    onChange={handleChanges}
                />
                <button onClick={handleSubmit}>Sign In</button>
            </form>
        </div>
    );
}


export default Login;