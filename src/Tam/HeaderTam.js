import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
import HomepageTam from "./HomepageTam";
import imgb from "./assets/images/cau.jpg";
import imga from "./assets/images/den.jpg";
import img from "./assets/images/tam.jpg";
import imgc from "./assets/images/tinh.jpg";
function HeaderTam() {
  return (
    <div>
      <HomepageTam />
      <div className="container">
        <div className="row justify-content-center mt-3">
          <div className="col-auto text-center">
            <Link to="/">
              <img
                src={img}
                alt="Mô tả ảnh"
                style={{
                  maxWidth: "20%",
                  maxHeight: "auto",
                  borderRadius: "50%",
                }}
              />
            </Link>
            <h1 className="text-success mt-3">CHE THANH TAM</h1>
            <img
              src={imga}
              alt="Mô tả ảnh"
              style={{
                maxWidth: "20%",
                maxHeight: "auto",
                borderRadius: "50%",
              }}
            />
            <img
              src={imgb}
              alt="Mô tả ảnh"
              style={{
                maxWidth: "20%",
                maxHeight: "auto",
                borderRadius: "50%",
              }}
            />
            <img
              src={imgc}
              alt="Mô tả ảnh"
              style={{
                maxWidth: "20%",
                maxHeight: "auto",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTam;
