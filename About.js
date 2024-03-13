import React from "react";

function About() {
  return (
    <div className="container">
      <h2 className="text-center py-2">About Me</h2>
      <p className="lead">
        I am a 3rd-year software engineering student at FPT Can Tho University
        with a strong passion for IT. I want to become a professional full-stack
        engineer or higher and believe this internship will allow me to apply my
        knowledge to contribute to the company. I am also excited to learn from
        the professional work environment and further develop myself.
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
  );
}

export default About;
