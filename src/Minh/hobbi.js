import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./edu.css";
import Inf from "./inf";
function Hobbi() {
  return (
    <Container className="py-4 d-flex p-0">
      <Inf />

      <Row className="col-md-8 align-items-center  container">
        <h1 className="text-center">Hobbies</h1>
        <Col md={6}>
          <Card className="hobbiesCard">
            <Card.Body className="hobbiesCardBody">
              <Card.Title className="hobbiesCardTitle">Reading</Card.Title>
              <Card.Text className="hobbiesDescription">
                I enjoy exploring new worlds and ideas through books.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="hobbiesCard">
            <Card.Body className="hobbiesCardBody">
              <Card.Title className="hobbiesCardTitle">Traveling</Card.Title>
              <Card.Text className="hobbiesDescription">
                Discovering new cultures and experiencing different lifestyles
                excites me.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="hobbiesCard">
            <Card.Body className="hobbiesCardBody">
              <Card.Title className="hobbiesCardTitle">Photograp</Card.Title>
              <Card.Text className="hobbiesDescription">
                Capturing beautiful moments and scenes brings me joy.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} l>
          <Card className="hobbiesCard">
            <Card.Body className="hobbiesCardBody">
              <Card.Title className="hobbiesCardTitle">Cooking</Card.Title>
              <Card.Text className="hobbiesDescription">
                Experimenting with recipes and creating delicious dishes is my
                passion.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Hobbi;
