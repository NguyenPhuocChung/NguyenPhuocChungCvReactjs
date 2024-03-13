import React from "react";

function MyProjects() {
  return (
    <div className="container">
      <h2 className="text-center py-3">Experience</h2>
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
            Design web CV by HTML, CSS; responsive by CSS. No use CSS libraries
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
  );
}

export default MyProjects;
