import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import './App.css';
import SearchForm from "./forms/SearchForm";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile"
import Logout from "./Logout";
import CreatePost from "./CreatePost";
import EditProfile from "./EditProfile";
//<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

const App = () => {
  const [user, setUser] = useState('');

  // const [documents, setDocuments] = useState(null);

  // useEffect(() => {
  //   async function getDocuments() {
  //     let res = await OnTaskApi.getDocuments();
  //     setDocuments(res);
  //   }
  //   getDocuments();
  // }, []);
  // console.log({ documents });

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home user={user} />}>
          </Route>
          <Route path="/search" element={<SearchForm />}>
          </Route>
          <Route path="/login" element={<Login user={user} setUser={setUser} />}>
          </Route>
          <Route path="/logout" element={<Logout user={user} setUser={setUser} />}>
          </Route>
          <Route path="/register" element={<Register />}>
          </Route>
          <Route path="/profile" element={<Profile user={user} />}>
          </Route>
          <Route path="/posts/new" element={<CreatePost user={user} />}>
          </Route>
          <Route path="/users/edit" element={<EditProfile user={user} />}>
          </Route>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
