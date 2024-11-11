import React from "react";
import content from "./Content";
import Header from "./Header";
function Skill() {
  return (
    <>
      <Header />
      {content.skills.content}
    </>
  );
}

export default Skill;
