import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./App.css";

function Main() {
  return (
    <div className="body">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 img_home"
            src="/images/avatar.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <Link to={"/Home"} className="text-white">
              <h5>Nguyễn Phước Chung</h5>
              <p>16/09/2002</p>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img_home"
            src="/images/de.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <Link to={"/de"} className="text-white">
              <h5>Phạm Văn Đế</h5>
              <p></p>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img_home"
            src="/images/ngocminh-removebg-preview.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <Link to={"/VuNgocMinh"} className="text-white ">
              <h5>Vũ Ngọc Minh</h5>
              <p>02/07/2003</p>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img_home"
            src="/images/z5264754798630_7932c89a761d52ac7981243b5fcb91e9-removebg-preview.png"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <Link to={"/TrinhQuocMinh"} className="text-white">
              <h5>Trịnh Quốc Minh</h5>
              <p>12/10/2003</p>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img_home"
            src="/images/7L8A4260-removebg-preview.png"
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <Link to={"/CheThanhTam"} className="text-white">
              <h5>Chế Thành Tâm</h5>
              <p></p>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Main;
