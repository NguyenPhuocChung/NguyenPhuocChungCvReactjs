import React from "react";
const Contentnminh = {
  about: {
    title: "About me",
    content: (
      <div className="container ">
        <h2 className="text-center py-2">About Me</h2>
        <p className="lead">
          I am a third-year software engineering student at FPT Can Tho
          University, deeply passionate about IT. My aspiration is to evolve
          into a proficient full-stack engineer or beyond, and I firmly believe
          that this internship opportunity aligns perfectly with my goals. I am
          eager to leverage my knowledge and skills to make meaningful
          contributions to the company. Moreover, I am enthusiastic about
          immersing myself in a professional work environment, where I can learn
          from experienced professionals and continuously enhance my
          capabilities. This internship represents a crucial step in my journey
          of self-improvement and growth within the field of IT.
        </p>
        <div className="card">
          <h3 className="card-header">Contact Information</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Phone: 0987144303</li>
            <li className="list-group-item">Email: minhngocvu03@gmail.com</li>
            <li className="list-group-item">
              Address: Nam Su Quarter, Hon Dat District, Kien Giang Province
            </li>
          </ul>
        </div>
        <div>
          <h3>Links</h3>
          <ul>
            <li className="list-group-item">
              My CV:{" "}
              <a
                href="https://github.com/vungocminh27/minh"
                target="_black"
                rel="noopener noreferrer"
              >
                https://github.com/vungocminh27/minh
              </a>
            </li>
            <li className="list-group-item">
              Facebook:{" "}
              <a
                href="https://www.facebook.com/profile.php?id=100022919286510"
                target="_black"
                rel="noopener noreferrer"
              >
                https://www.facebook.com/profile.php?id=100022919286510
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
            <p className="card-text">Duration 300 ms</p>
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
          <h3 className="card-header">Game Snake</h3>
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
          <h3 className="card-header">VeganGlamourHub</h3>
          <div className="card-body">
            <p className="card-text">Personal Project</p>
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

export default Contentnminh;
