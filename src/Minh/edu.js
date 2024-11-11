import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./edu.css";
import Inf from "./inf";

function Edu() {
  return (
    <Container className="py-4 d-flex p-0">
      <Inf />
      <Row className="col-md-8 align-items-center  container">
        <h2 className="text-center mb-4">Education</h2>
        <Row>
          <Col md={6} className="mb-4">
            <Card className="newEducationCard">
              <Card.Body className="newEducationCardBody">
                <Card.Title className="educationCardTitle">
                  Elementary School
                </Card.Title>
                <ul className="educationList">
                  <li className="educationItem">
                    <strong>School Name:</strong> Tra On town primary school
                  </li>
                  <li className="educationItem">
                    <strong>Year:</strong> Year range (2009 - 2015)
                  </li>
                  <li className="educationItem">
                    <strong>Details:</strong> A place for active learning,
                    enthusiastic teachers, and comprehensive development for
                    students
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="newEducationCard">
              <Card.Body className="newEducationCardBody">
                <Card.Title className="educationCardTitle">
                  Middle School
                </Card.Title>
                <ul className="educationList">
                  <li className="educationItem">
                    <strong>School Name:</strong> Tra On Town Secondary School
                  </li>
                  <li className="educationItem">
                    <strong>Year:</strong> Year range ( 2015 - 2018)
                  </li>
                  <li className="educationItem">
                    <strong>Details:</strong> A place for active learning,
                    enthusiastic teachers, and comprehensive development for
                    students
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-4">
            <Card className="newEducationCard">
              <Card.Body className="newEducationCardBody">
                <Card.Title className="educationCardTitle">
                  High School
                </Card.Title>
                <ul className="educationList">
                  <li className="educationItem">
                    <strong>School Name:</strong> Tra On High School
                  </li>
                  <li className="educationItem">
                    <strong>Year:</strong> Year range (2018 - 2021)
                  </li>
                  <li className="educationItem">
                    <strong>Details:</strong> A place for active learning,
                    enthusiastic teachers, and comprehensive development for
                    students
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="newEducationCard">
              <Card.Body className="newEducationCardBody">
                <Card.Title className="educationCardTitle">
                  University
                </Card.Title>
                <ul className="educationList">
                  <li className="educationItem">
                    <strong>University Name:</strong> Can Tho FPT University
                  </li>
                  <li className="educationItem">
                    <strong>Year:</strong> Year range (2021 - present)
                  </li>
                  <li className="educationItem">
                    <strong>Details:</strong> Energizing life
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Edu;
