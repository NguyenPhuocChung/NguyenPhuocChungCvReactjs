import React from "react";
import content from "./Content";
import Header from "./Header";
function About() {
  return (
    <div>
      <Header />
      {content.about.content}
    </div>
  );
}

export default About;
