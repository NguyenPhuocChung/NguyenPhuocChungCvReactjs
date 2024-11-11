import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";

function HomepageTam() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container p-0">
          <Link to="/" className="navbar-brand">
            Thanh Tam
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
                <Link to="/aboutTam" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/SkillsTam" className="nav-link">
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/EducationTam" className="nav-link">
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/MyProjectsTam" className="nav-link">
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

export default HomepageTam;
