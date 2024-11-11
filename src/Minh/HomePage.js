import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Appqm.css";
import img from "./z5096601174578_e512432c5cf8ca8d83a24654f566545d.jpg";
function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="py-4 d-flex p-0">
      <Row className="col-md-4 container p-0">
        <Col>
          <h1>
            <Link to="/">I'm</Link>
          </h1>
          <h1
            id="co"
            className={`developer-text ${isVisible ? "visible" : ""}`}
          >
            <Link to="/">Developer</Link>
          </h1>
        </Col>
        <Col>
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
        </Col>
      </Row>
      <Row className="col-md-8 align-items-center minh container">
        <Col>
          <Card className="educationCard">
            <Card.Body className="educationCardBody">
              <Card.Title className="educationCardTitle">
                <Link to="/educationMinh">Education</Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="skillsCard">
            <Card.Body className="skillsCardBody">
              <Card.Title className="skillsCardTitle">
                <Link to="/skillMinh">Skill </Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="projectsCard">
            <Card.Body className="projectsCardBody">
              <Card.Title className="projectsCardTitle">
                <Link to="/projectMinh">Project</Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="experienceCard">
            <Card.Body className="experienceCardBody">
              <Card.Title className="experienceCardTitle">
                <Link to="/hobbiesMinh">Hobbies</Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
