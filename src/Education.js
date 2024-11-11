import React from "react";
import content from "./Content";
import Header from "./Header";
function Education() {
  return (
    <>
      <Header />
      {content.education.content}
    </>
  );
}

export default Education;
