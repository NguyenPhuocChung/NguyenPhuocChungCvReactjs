import { Fragment, React } from "react";
import { Link } from "react-router-dom";
import "./de.css";
function Headerde() {
  return (
    <Fragment>
      <div className="Appde">
        <nav className="navbar navbar-expand-lg  ">
          <div className="container-fluid header  ">
            <Link to="/de" className="navbar-brand text-white ">
              <strong>Memory</strong>
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
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li>
                  <Link
                    to="/me"
                    className="nav-link text-white"
                    aria-current="page"
                  >
                    Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
}
export default Headerde;
