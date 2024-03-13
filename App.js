import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./About";

import Education from "./Education";
import Header from "./Header";
import Home from "./Home";
import MyProject from "./MyProject";
import Skill from "./Skill";
function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Skill" element={<Skill />} />
          <Route path="/MyProject" element={<MyProject />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
