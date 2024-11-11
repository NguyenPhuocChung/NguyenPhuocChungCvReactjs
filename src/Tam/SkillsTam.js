import React from "react";
import content from "./ContentTam";
import HomepageTam from "./HomepageTam";
function SkillsTam() {
  return (
    <>
      {" "}
      <HomepageTam />
      {content.skills.content}
    </>
  );
}

export default SkillsTam;
