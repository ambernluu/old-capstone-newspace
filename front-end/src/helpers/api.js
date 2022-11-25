const BASE_API_URL = "http://localhost:5000";


export const authenticateUser = async (params) => {

  const body = {
    "username": `${params.username}`,
    "password": `${params.password}`
  }

  const response = await fetch(`${BASE_API_URL}/auth/token`, {
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(body)
  })

  const status = response.status;
  //console.log({ status })

  if (status === 200) {
    return response.json();
    // console.log(await response.json());
    // return {
    //   token: await response.json()
    // }
  }

  if (status === 401) {
    throw new Error('incorrect username/password');
  }
  
  else {
    throw new Error('something happened');
  }
}

export const RegisterUser = async (params) => {
  const body = {
    "username": `${params.username}`,
    "password": `${params.password}`,
    "firstName": `${params.firstName}`,
    "lastName": `${params.lastName}`,
    "email": `${params.email}`,

  }
  console.log("body: ", JSON.stringify(body));
  const response = await fetch(`${BASE_API_URL}/auth/register`, {
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(body)
  })

  const res = await response.json();
  console.log("res ", res);
  return res;
}



