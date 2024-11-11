import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "./z5096601174578_e512432c5cf8ca8d83a24654f566545d.jpg";

function Inf() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>
        <Link to="/">I'm</Link>
      </h1>
      <h1 id="co" className={`developer-text ${isVisible ? "visible" : ""}`}>
        <Link to="/">Developer</Link>
      </h1>
      <Card className="personalInfoCard">
        <Card.Body className="personalInfoCardBody">
          <Link to="/TrinhQuocMinh">
            <div className="text-center mb-3">
              <Image
                src={img}
                className="avatar"
                style={{ width: "200px", height: "150px" }}
              />
            </div>
          </Link>
          <Card.Title className="personalInfoCardTitle">
            {" "}
            Information
          </Card.Title>
          <ul className="personalInfoList">
            <li className="personalInfoItem">
              <strong>Name: </strong> Trinh Quoc Minh
            </li>
            <li className="personalInfoItem">
              <strong>Birthday:</strong> 12/10/2003
            </li>
            <li className="personalInfoItem">
              <strong>Address:</strong> My Hoa, Thien My, Tra On, Vinh Long
            </li>
            <li className="personalInfoItem">
              <strong>Email:</strong> Minhtqce170364@fpt.edu.vn
            </li>
            <li className="personalInfoItem">
              <strong>Phone number:</strong> 0961375304
            </li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Inf;
