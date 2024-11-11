import React from "react";

const ContentTam = {
  about: {
    title: "About me",
    content: (
      <div className="container">
        <h2 className="text-center py-2">About Me</h2>
        <p className="lead">
          -Short-term: Find a position to apply learned knowledge to work to
          better grasp knowledge and apply it to successfully complete assigned
          tasks and bring value to the company. -Long-term: Become an expert in
          Software Project Management with a focus on researching software
          management systems that assist businesses in addressing issues,
          modernizing, and technologically streamlining the management of
          business models to make it more convenient, efficient, and
          straightforward
        </p>
        <div className="card">
          <h3 className="card-header">Contact Information</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Phone: 0868054309</li>
            <li className="list-group-item">Email: tamctce171203@fpt.edu.vn</li>
            <li className="list-group-item">
              Address: Tan Phu A, Tan Binh, Thanh Binh, Dong Thap
            </li>
          </ul>
        </div>
        <div>
          <h3>Links</h3>
          <ul>
            <li className="list-group-item">
              My CV:{" "}
              <a
                href="https://github.com/thanhtams"
                target="_black"
                rel="noopener noreferrer"
              >
                https://github.com/thanhtams
              </a>
            </li>
            <li className="list-group-item">
              Facebook:{" "}
              <a
                href="https://www.facebook.com/tam.che.161"
                target="_black"
                rel="noopener noreferrer"
              >
                https://www.facebook.com/tam.che.161
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
      <div className="container">
        <h2 className="text-center py-3">Skills</h2>
        <div className="card">
          <h3 className="card-header">Programming Languages</h3>
          <div className="card-body">
            <p className="card-text">C/C++, Java, HTML, CSS, JavaScript</p>
          </div>
        </div>
        <div className="card mt-3">
          <h3 className="card-header">Frameworks</h3>
          <div className="card-body">
            <p className="card-text">Frontend JS, ReactJS, Bootstrap, jQuery</p>
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
  myProject: {
    title: "My Projects",
    content: (
      <div className="container">
        <h2 className="text-center py-3">My Project</h2>
        <div className="card">
          <h3 className="card-header">bomb explosion chess game</h3>
          <div className="card-body">
            <p className="card-text">Group Project</p>
            <p className="card-text">March 2, 2023</p>
            <p>
              Used JSP, Bootstrap for frontend design. Used Java, SQL for
              backend processing
            </p>
          </div>
        </div>
        <div className="card mt-3">
          <h3 className="card-header">car sales website</h3>
          <div className="card-body">
            <p className="card-text">Group Project</p>
            <p className="card-text">July 7, 2023</p>
            <p className="card-text">
              Used HTML, CSS, Bootstrap for frontend design. Used JavaScript,
              SQL for backend processing
            </p>
          </div>
        </div>
      </div>
    ),
  },
  education: {
    title: "Education",
    content: (
      <div className="container">
        <h2 className="text-center py-3">Education</h2>
        <div className="card">
          <h3 className="card-header">Can Tho FPT University</h3>
          <div className="card-body">
            <p className="card-text">Student 3rd</p>
          </div>
        </div>
        <div className="card mt-3">
          <h3 className="card-header">Languages</h3>
          <div className="card-body">
            <p className="card-text">English (450 Toeic)</p>
            <p className="card-text">Japanese (N4)</p>
          </div>
        </div>
      </div>
    ),
  },
};

export default ContentTam;
