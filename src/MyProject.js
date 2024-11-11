import React from "react";
import content from "./Content";
import Header from "./Header";
function MyProjects() {
  return (
    <>
      <Header />
      {content.myProjects.content}
    </>
  );
}

export default MyProjects;
