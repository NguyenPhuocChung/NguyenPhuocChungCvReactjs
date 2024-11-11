import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutChung from "./About";

import Contact from "./Contact";
import EducationChung from "./Education";
import HomeChung from "./Home";
import Main from "./Main";
import HomePage from "./Minh/HomePage";
import Edu from "./Minh/edu";
import Hobbi from "./Minh/hobbi";
import Project from "./Minh/pro";
import Skills from "./Minh/skill";
import MyProjectChung from "./MyProject";
import Aboutnminh from "./NgocMinh/Aboutnminh";
import Educationnminh from "./NgocMinh/Educationnminh";
import HeaderMinh from "./NgocMinh/HeaderMinh";
import MyProjectsnminh from "./NgocMinh/MyProjectsnminh";
import Skillsnminh from "./NgocMinh/Skillsnminh";
import SkillChung from "./Skill";
import AboutTam from "./Tam/AboutTam";
import EducationTam from "./Tam/EducationTam";
import HeaderTam from "./Tam/HeaderTam";
import MyProjectsTam from "./Tam/MyProjectsTam";
import SkillsTam from "./Tam/SkillsTam";

import Me from "./De/components/Me";
import Memory from "./De/components/Memory";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Home" element={<HomeChung />} />
          <Route path="/About" element={<AboutChung />} />
          <Route path="/Education" element={<EducationChung />} />
          <Route path="/Skill" element={<SkillChung />} />
          <Route path="/MyProject" element={<MyProjectChung />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path="/TrinhQuocMinh" element={<HomePage />} />
          <Route path="/educationMinh" element={<Edu />} />
          <Route path="/projectMinh" element={<Project />} />
          <Route path="/skillMinh" element={<Skills />} />
          <Route path="/hobbiesMinh" element={<Hobbi />} />

          <Route path="/VuNgocMinh" element={<HeaderMinh />} />
          <Route path="/AboutMinh" element={<Aboutnminh />} />
          <Route path="/SkillsNMinh" element={<Skillsnminh />} />
          <Route path="/EducationNMinh" element={<Educationnminh />} />
          <Route path="/MyprojectsNMinh" element={<MyProjectsnminh />} />

          <Route path="/CheThanhTam" element={<HeaderTam />} />
          <Route path="/AboutTam" element={<AboutTam />} />
          <Route path="/SkillsTam" element={<SkillsTam />} />
          <Route path="/EducationTam" element={<EducationTam />} />
          <Route path="/MyprojectsTam" element={<MyProjectsTam />} />

          <Route path="/de" element={<Memory />} />

          <Route path="/me" element={<Me />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
