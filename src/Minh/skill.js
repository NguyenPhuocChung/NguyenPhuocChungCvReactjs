import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Card, Col, Container, ProgressBar, Row } from "react-bootstrap";
import "./edu.css";
import Inf from "./inf";
function Skill() {
  return (
    <Container className="py-4 d-flex ">
      <Inf />

      <Row className="col-md-8 align-items-center  container">
        <h1 className="text-center">Skill</h1>
        <Col md={6} lg={3}>
          <Card className="skillsCard">
            <Card.Body className="newskillsCardBody">
              <Card.Title className="newskillsCardTitle text-center">
                Soft Skill
              </Card.Title>
              <ul className="skillsList">
                <li className="skillsItem">
                  Communication <ProgressBar now={90} label="90%" />
                </li>
                <li className="skillsItem">
                  Teamwork <ProgressBar now={85} label="85%" />
                </li>
                <li className="skillsItem">
                  Problem-solving <ProgressBar now={80} label="80%" />
                </li>
                <li className="skillsItem">
                  Adaptability <ProgressBar now={95} label="95%" />
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="skillsCard">
            <Card.Body className="newskillsCardBody">
              <Card.Title className="newskillsCardTitle text-center">
                Technical Skill
              </Card.Title>
              <ul className="skillsList">
                <li className="skillsItem">
                  Programming Languages <ProgressBar now={70} label="70%" />
                </li>
                <li className="skillsItem">
                  Web Development <ProgressBar now={80} label="80%" />
                </li>
                <li className="skillsItem">
                  Database Management <ProgressBar now={55} label="55%" />
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="skillsCard">
            <Card.Body className="newskillsCardBody">
              <Card.Title className="newskillsCardTitle text-center">
                Leadership Skill
              </Card.Title>
              <ul className="skillsList">
                <li className="skillsItem">
                  Decision-making <ProgressBar now={65} label="65%" />
                </li>
                <li className="skillsItem">
                  Delegation <ProgressBar now={75} label="75%" />
                </li>
                <li className="skillsItem">
                  Strategic Planning <ProgressBar now={75} label="75%" />
                </li>
                <li className="skillsItem">
                  Conflict Resolution <ProgressBar now={90} label="90%" />
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="skillsCard">
            <Card.Body className="newskillsCardBody">
              <Card.Title className="newskillsCardTitle text-center">
                Language Skill
              </Card.Title>
              <ul className="skillsList">
                <li className="skillsItem">
                  Vietnamese <ProgressBar now={98} label="98%" />
                </li>
                <li className="skillsItem">
                  English <ProgressBar now={80} label="80%" />
                </li>
                <li className="skillsItem">
                  Japanese <ProgressBar now={5} label="5%" />
                </li>
                <li className="skillsItem">
                  French <ProgressBar now={2} label="2%" />
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Skill;
