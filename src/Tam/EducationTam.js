import React from "react";
import Content from "./ContentTam";
import HomepageTam from "./HomepageTam";
function EducationTam() {
  return (
    <>
      {" "}
      <HomepageTam />
      {Content.education.content}
    </>
  );
}

export default EducationTam;
