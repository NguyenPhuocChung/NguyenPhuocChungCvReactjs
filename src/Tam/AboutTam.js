import React from "react";
import content from "./ContentTam";
import HomepageTam from "./HomepageTam";
function AboutTam() {
  return (
    <>
      <HomepageTam />
      {content.about.content}
    </>
  );
}

export default AboutTam;
