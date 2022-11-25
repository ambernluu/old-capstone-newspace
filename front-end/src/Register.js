import React from "react";
import { useState } from "react";
import RegistrationForm from "./forms/RegistrationForm"


function Register() {
  const [data, setData] = useState('');

  if (!data) return <RegistrationForm setData={setData} />


  return (
    <div>
      <p> Welcome {data.username}! </p>
    </div>
  );
}

export default Register;
