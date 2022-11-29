import React from "react";
import { useState } from "react";
import LoginForm from "./forms/LoginForm";
import { Navigate } from 'react-router';
import Profile from "./Profile"
//import { isLoggedIn, user } from "./helpers/authenticate"
import NavBar from './NavBar'


const Login = ({user, setUser}) => {
  const [data, setData] = useState('');
  const [err, setErr] = useState('');

  if (!user) {
    return (
      <div>
        <LoginForm setData={setData} setErr={setErr} setUser={setUser} />
        {err.message}
      </div>
    )
  }
  return <Navigate push to="/" />


}

export default Login;
