import React from "react";
import { useState } from "react";
import LoginForm from "./forms/LoginForm"


function Login() {
  const [data, setData] = useState('');

  if (!data) return <LoginForm setData={setData} />


  return (
    <div>
      <p> Welcome back {data.username}! </p>
    </div>
  );
}

export default Login;
