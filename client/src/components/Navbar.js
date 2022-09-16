import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss"

const Navbar = () => {
    const style = {
        color:"yellow",
        textDecoration:"none"
    }
  return (
    <nav>
      <Link style={style} to="/">DataLoad</Link>
      <Link style={style} to="/add">Add User</Link>
    </nav>
  );
};

export default Navbar;
