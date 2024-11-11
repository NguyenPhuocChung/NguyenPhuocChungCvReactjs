// content.js
import React from "react";

const content = {
  about: {
    title: "About Me",
    content: (
      <div className="container mb-3">
        <h2 className="text-center py-2">About Me</h2>
        <p className="lead">
          I am a 3rd-year software engineering student at FPT Can Tho University
          with a strong passion for IT. I want to become a professional
          full-stack engineer or higher and believe this internship will allow
          me to apply my knowledge to contribute to the company. I am also
          excited to learn from the professional work environment and further
          develop myself.
        </p>
        <div className="card">
          <h3 className="card-header">Contact Information</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Phone: 0982275857</li>
            <li className="list-group-item">Email: chungnp160902@gmail.com</li>
            <li className="list-group-item">
              Address: Bao Gia-Tran Phan-Dam Doi-Ca Mau
            </li>
          </ul>
        </div>
        <div className="card mt-3">
          <h3 className="card-header">Links</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              My CV:{" "}
              <a
                href="https://nguyenphuocchung.github.io/My-Cv/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://nguyenphuocchung.github.io/My-Cv/
              </a>
            </li>
            <li className="list-group-item">
              Facebook:{" "}
              <a
                href="https://www.facebook.com/profile.php?id=100081978800348"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.facebook.com/profile.php?id=100081978800348
              </a>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  skills: {
    title: "Skills",
    content: (
      <div className="container  mb-3">
        <h2 className="text-center py-3">Skills</h2>
        <div className="card">
          <h3 className="card-header">Programming Languages</h3>
          <div className="card-body">
            <p className="card-text">C/C++, Java, HTML, CSS, Javascript</p>
          </div>
        </div>
        <div className="card mt-3">
          <h3 className="card-header">Frameworks</h3>
          <div className="card-body">
            <p className="card-text">React.js, Bootstrap</p>
          </div>
        </div>
        <div className="card mt-3">
          <h3 className="card-header">Database</h3>
          <div className="card-body">
            <p className="card-text">MySQL</p>
          </div>
        </div>
        <div className="card mt-3">
          <h3 className="card-header">Design</h3>
          <div className="card-body">
            <p className="card-text">Poster design</p>
          </div>
        </div>
        <div className="card mt-3">
          <h3 className="card-header">Communication</h3>
          <div className="card-body">
            <p className="card-text">Strong communication skills</p>
          </div>
        </div>
        <div className="card mt-3">
          <h3 className="card-header">Teamwork</h3>
          <div className="card-body">
            <p className="card-text">Working effectively in group settings</p>
          </div>
        </div>
      </div>
    ),
  },
  myProjects: {
    title: "My Projects",
    content: (
      <div className="container  mb-3">
        <h2 className="text-center py-3">My Project</h2>
        <div className="card">
          <h3 className="card-header">Game Puzzle</h3>
          <div className="card-body">
            <p className="card-text">Personal project</p>
            <p className="card-text">March 2, 2022</p>
            <p className="card-text">Use Java</p>
          </div>
        </div>
        <div className="card mt-3">
          <h3 className="card-header">Web Application for Client</h3>
          <div className="card-body">
            <p className="card-text">Fivver.com</p>
            <p className="card-text">Dec 21, 2023</p>
            <p className="card-text">
              Design web CV by HTML, CSS; responsive by CSS. No use CSS
              libraries
            </p>
          </div>
        </div>
        <div className="card mt-3">
          <h3 className="card-header">Web Can Tho Travel Ticket Booking</h3>
          <div className="card-body">
            <p className="card-text">Personal project</p>
            <p className="card-text">March 2, 2024</p>
            <p className="card-text">
              Use JSP, CSS, JS; Bootstrap for frontend design. Use Java, SQL for
              backend processing
            </p>
          </div>
        </div>
        <div className="card mt-3">
          <h3 className="card-header">Web Music</h3>
          <div className="card-body">
            <p className="card-text">Personal project</p>
            <p className="card-text">April 16, 2024</p>
            <p className="card-text">
              Use React.js, Spotify API; Bootstrap for React
            </p>
          </div>
        </div>
      </div>
    ),
  },
  education: {
    title: "Education",
    content: (
      <div className="container  mb-3">
        <h2 className="text-center py-3">Education</h2>
        <div className="card">
          <h3 className="card-header">CAN THO FPT UNIVERSITY</h3>
          <div className="card-body">
            <p className="card-text">Student 3-year</p>
          </div>
        </div>
        <h2 className="mt-3">Language</h2>
        <ul className="list-group">
          <li className="list-group-item">English (basic)</li>
          <li className="list-group-item">Japanese (basic)</li>
        </ul>
      </div>
    ),
  },
};

export default content;
