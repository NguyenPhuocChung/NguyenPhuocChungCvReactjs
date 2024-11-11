import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import Routes

import AboutTam from "./AboutTam";
import EducationTam from "./EducationTam";
import HeaderTam from "./HeaderTam";
import HomepageTam from "./HomepageTam";
import MyProjectsTam from "./MyProjectsTam";
import SkillsTam from "./SkillsTam";
const App = () => {
  return (
    <Router>
      <div>
        <HomepageTam />
        <Routes>
          <Route path="/CheThanhTam" element={<HeaderTam />} />
          <Route path="/AboutTam" element={<AboutTam />} />
          <Route path="/SkillsTam" element={<SkillsTam />} />
          <Route path="/EducationTam" element={<EducationTam />} />
          <Route path="/MyprojectsTam" element={<MyProjectsTam />} />{" "}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
