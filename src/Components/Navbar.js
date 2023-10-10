import React from 'react';
import logo from "../assets/Img/uasu-logo.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navba" style={{ background: "rgb(15, 87, 125)" }}>
      <div className="logo">
      <Link to="/">
        <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="button">
        <Link to="/Waitlist">
        <button>BETA SIGNUP</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;


