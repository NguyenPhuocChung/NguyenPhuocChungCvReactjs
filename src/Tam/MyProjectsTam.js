import React from "react";
import content from "./ContentTam";
import HomepageTam from "./HomepageTam";
function MyProjectsTam() {
  return (
    <>
      {" "}
      <HomepageTam />
      {content.myProject.content}
    </>
  );
}

export default MyProjectsTam;
