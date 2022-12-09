import React from "react";
import { useState } from "react";
import RegistrationForm from "./forms/RegistrationForm";
import { Navigate } from 'react-router';


function Register() {
  const [data, setData] = useState('');

  if (!data) return <RegistrationForm setData={setData} />


  
  return <Navigate push to="/" />
}

export default Register;
