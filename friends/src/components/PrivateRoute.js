import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// mimic the Route component but with auth checks
// 1. API - interface behaves like Route
// 2. use Route by passing props to it
// 3. if user is authenticated, then render component. if not, redirect ot login

// Below is destructuring, pulling component out of props and renaming as a capital component so it can render. ...props then passes the rest of the properties of the component

const PrivateRoute = ({ component: Component, ...props }) => {
    return <Route {...props } render={() => {
        if (localStorage.getItem('token')) {
            return <Component />
        } else {
            return <Redirect to='/Login' />;
        }
    }} />
};



export default PrivateRoute;