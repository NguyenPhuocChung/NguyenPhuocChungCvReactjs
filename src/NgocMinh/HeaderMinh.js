import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Homepagenminh from "./Homepagenminh";
import img from "./img/cv.jpg";
function HeaderMinh() {
  return (
    <div>
      <Homepagenminh />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto text-center">
            <Link to="/">
              <img
                src={img}
                alt="Mô tả ảnh"
                style={{ maxWidth: "40%", height: "auto" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMinh;
