import React from "react";

function Skill() {
  return (
    <div className="container">
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
  );
}

export default Skill;
