import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Appqm.css";
import Inf from "./inf";
function Pro() {
  return (
    <Container className="py-4 d-flex">
      <Inf />
      <Row className="col-md-8 align-items-center  container">
        <h1 className="text-center">Project</h1>
        <Col md={4}>
          <Card className="projectsCard">
            <Card.Body className="projectsCardBody">
              <Card.Title className="projectsCardTitle">
                Dried Fruit E-commerce Website
              </Card.Title>
              <Card.Text>
                A web platform for selling dried fruits online, providing users
                with a convenient shopping experience and a wide selection of
                high-quality dried fruits.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="projectsCard">
            <Card.Body className="projectsCardBody">
              <Card.Title className="projectsCardTitle">
                Can Tho Travel Booking Tour Website
              </Card.Title>
              <Card.Text>
                A comprehensive travel booking website tailored for Can Tho,
                offering tour packages, accommodation options, and travel guides
                to explore the beautiful city.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="projectsCard">
            <Card.Body className="projectsCardBody">
              <Card.Title className="projectsCardTitle">
                E-commerce Website
              </Card.Title>
              <Card.Text>
                An online store for selling various products, providing
                customers with a seamless shopping experience, secure payment
                options, and efficient order management.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Pro;
