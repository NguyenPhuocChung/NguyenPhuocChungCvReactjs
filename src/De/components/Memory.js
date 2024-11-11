import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import Headerde from "../header";
import mn3 from "../img/chung.jpg";
import mn1 from "../img/minh.jpg";
import img1 from "../img/mmr1.jpg";
import img2 from "../img/mmr2.jpg";
import img3 from "../img/mmr3.jpg";
import mn2 from "../img/nminh.jpg";
import mn4 from "../img/tam.jpg";
import "./ImageRow.css";

const Home = () => {
  return (
    <div className="wi Appde">
      <Headerde />
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <div>
        <div className="friends">
          <h2 className="text-white">MY FRIENDS</h2>
        </div>
        <div className="image-row">
          <div>
            <a
              href="https://www.facebook.com/profile.php?id=100086254671221"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <img src={mn1} alt="Image 1" className="avatar rounded-image" />
              <p>Quốc Minh</p>
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/profile.php?id=100022919286510"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <img src={mn2} alt="Image 1" className="avatar rounded-image" />
              <p>Ngọc Minh</p>
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/profile.php?id=100081978800348"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <img src={mn3} alt="Image 1" className="avatar rounded-image" />
              <p>Phước Chung</p>
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/tam.che.161"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <img src={mn4} alt="Image 1" className="avatar rounded-image" />
              <p>Thành Tâm</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
