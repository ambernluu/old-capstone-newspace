import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem} from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <Nav>
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
        </Nav>
        <Navbar>
          <NavItem>
            <NavLink to="/login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/register">Register</NavLink>
          </NavItem>
        </Navbar>
      </Navbar>
    </div>
  );
}


export default NavBar;
