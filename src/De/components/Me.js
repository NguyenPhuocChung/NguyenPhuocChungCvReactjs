import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Headerde from "../header";
import img3 from "../img/mprofile.png";
import "./me.css";

const information = {
  address: "Long Thạnh, Giồng Riêng, Kiên Giang",
  email: "phamvande1805@gmail.com",
  phone: "0877734803",
  birth: "18-05-2003",
};
const education = {
  primaryschool: "Trường Tiều Học Long Thạnh 1",
  hightschool: "Trường THPT Long Thạnh",
  uiversity: "Trườg Đại Học FPT Cần Thơ",
};
const experience = {
  ex1: "Participate in group projects",
  ex2: "Worked in many places but not in the technology field ",
};
const skill = {
  workinggroup: "Able to integrate into any team working environment",
  selflearning: "Always seek to learn new knowledge",
  softskills: "Able to handle soldiers in good situations",
  program: "Use programming languages at a basic level",
};

const hobbies = {
  hb1: "Gym",
  hb2: "Write code",
  hb3: "Read book",
};

const About = () => {
  return (
    <div className="Appde">
      <Headerde />
      <Container>
        <h2 className="text-danger mb-4"> Phạm Văn Đế (K17-FU)</h2>
        <Row>
          <Col md={6}>
            <div className="infor  text-white">
              <Link to="/">
                {" "}
                <Image src={img3} width={260} alt="Profile" />
              </Link>
              <h3>Personal information</h3>
              <ul>
                <li>
                  <strong>Address:</strong> {information.address}
                </li>
                <li>
                  <strong>Email:</strong> {information.email}
                </li>
                <li>
                  <strong>Phone: </strong> {information.phone}{" "}
                </li>
                <li>
                  <strong>Birth:</strong> {information.birth}{" "}
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <div className="text-white">
              <h3>Education</h3>
              <ul>
                <li>
                  <strong>Primary school:</strong> {education.primaryschool}
                </li>
                <li>
                  <strong>Hight school:</strong> {education.hightschool}
                </li>
                <li>
                  <strong>University:</strong> {education.uiversity}
                </li>
              </ul>
              <h3>Skills</h3>
              <ul>
                <li> {skill.selflearning}</li>
                <li> {skill.softskills}</li>
                <li> {skill.workinggroup}</li>
                <li> {skill.program}</li>
              </ul>
              <h3>Experience</h3>
              <ul>
                <li> {experience.ex1}</li>
                <li> {experience.ex2}</li>
              </ul>
              <h3>Hobbies</h3>
              <ul>
                <li> {hobbies.hb1}</li>
                <li> {hobbies.hb2}</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default About;
