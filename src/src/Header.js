import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
function Header() {
  return (
    <>
      <div className="bg-dark text-light d-flex justify-content-center">
        <Link to="/Home" className=" p-3 nav-link text-light">
          Home
        </Link>
        <Link to="/About" className="py-3 nav-link text-light">
          About
        </Link>
        <Link to="/Skill" className=" p-3 nav-link text-light">
          My Skill
        </Link>
        <Link to="/Education" className="py-3 nav-link text-light">
          Education
        </Link>
        <Link to="/MyProject" className="p-3 nav-link text-light p-3">
          My Project
        </Link>
      </div>
    </>
  );
}

export default Header;
