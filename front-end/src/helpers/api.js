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

  if (status === 200) {
    return response.json();
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

export const CreatePost = async (params) => {
  const body = {
    "image_url": `${params.image_url}`,
    "body": `${params.body}`,
    "posted_by": `${localStorage.getItem('username')}`
  }
  
  const response = await fetch(`${BASE_API_URL}/posts`, {
    headers: {
      'content-type': 'application/json',
      'authorization': `${localStorage.getItem('token')}`
    },
    method: 'POST',
    body: JSON.stringify(body)
  })

  return await response.json();
}

export const GetLikes = async (username) => {
  const response = await fetch(`${BASE_API_URL}/users/${username}/likes`, {
    headers: {
      'content-type': 'application/json',
      'authorization': `${localStorage.getItem('token')}`
    },
    method: 'GET'
  })
  return await response.json();

}
//****** ISSUE HERE IS THAT THIS MAKES A NEW LIKE/POST WE NEED TO CHECK IF IS EXISTING AND THEN TOGGLE IT */
export const SetLike = async ({username, post_id}) => {
  const body = {
    "username": `${username}`,
    "post_id": `${post_id}`
  }

  //check if exists
  const likeRes = await fetch(`${BASE_API_URL}/users/${username}/likes`, {
    headers: {
      'content-type': 'application/json',
      'authorization': `${localStorage.getItem('token')}`
    },
    method: 'GET'
  })

  const response = await fetch(`${BASE_API_URL}/users/${localStorage.getItem('username')}/likes`, {
    headers: {
      'content-type': 'application/json',
      'authorization': `${localStorage.getItem('token')}`
    },
    method: 'POST',
    body: JSON.stringify(body)
  })

  return await response.json();
}

export const GetPosts = async () => {
  const response = await fetch(`${BASE_API_URL}/posts`, {
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET'
  })

  const res = await response.json();
  return res.posts;
}
export const SearchPosts = async (params) => {
  const response = await fetch(`${BASE_API_URL}/posts/?body=${params.searchBody}}`, {
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET'
  })

  const res = await response.json();
  return res.posts;
}

export const UpdateUser = async (params) => {
  const body = {
    "firstName": `${params.firstName}`,
    "lastName": `${params.lastName}`,
    "email": `${params.email}`,

  }
  const response = await fetch(`${BASE_API_URL}/users/${localStorage.getItem('username')}`, {
    headers: {
      'content-type': 'application/json',
      'authorization': `${localStorage.getItem('token')}`
    },
    method: 'PATCH',
    body: JSON.stringify(body)
  })

  const res = await response.json();
  return res;
}

// exports.handler = async (event) => {
//   const response = {
//     statusCode: 200,
//     headers: {
//       "Access-Control-Allow-Headers": "Content-Type",
//       "Access-Control-Allow-Origin": "https://www.example.com",
//       "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
//     },
//     body: JSON.stringify('Hello from Lambda!'),
//   };
//   return response;
// };