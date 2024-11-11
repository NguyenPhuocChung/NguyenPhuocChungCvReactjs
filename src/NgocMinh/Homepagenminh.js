import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
function Homepagenminh() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
        <div className=" d-flex p-0">
          <Link to="/VuNgocMinh" className="navbar-brand">
            Ngoc Minh
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/AboutMinh" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/SkillsNMinh" className="nav-link">
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/EducationNMinh" className="nav-link">
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/MyprojectsNMinh" className="nav-link">
                  MyProjects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Homepagenminh;
