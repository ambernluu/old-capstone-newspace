import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
//import Login from "./Login";
import logout from './Login';
//import user from './Login';

const NavBar = ({user, setUser}) => {
  
  // const [user, setUser] = useState('');

  // useEffect(() => {
  //   const isLoggedIn = () => {
  //     if(user)setUser(localStorage.getItem('username'));
  //   }
    
  // }, [user]);
  

  //console.log("isloggedin ", isLoggedIn)
  return (
    <div>
      <Navbar expand="md">
        {user && <Nav>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem> 
          <NavItem>
            <NavLink to="/search">Search</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/friends">Friends</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/music">Music</NavLink>
          </NavItem>
        </Nav>}
        <Navbar>
          <NavItem>
            {user ? <NavLink to="/logout"> Logout</NavLink> : <NavLink to="/login"> Login</NavLink>}
          </NavItem>
          {!user && <NavItem>
            <NavLink to="/register">Register</NavLink>
          </NavItem>}
        </Navbar>
      </Navbar>
    </div>
  );
}


export default NavBar;
