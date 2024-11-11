import React from "react";
import content from "./Contentnminh";
import Homepagenminh from "./Homepagenminh";
function Aboutnminh() {
  return (
    <>
      <Homepagenminh />;<div>{content.about.content}</div>
    </>
  );
}

export default Aboutnminh;
