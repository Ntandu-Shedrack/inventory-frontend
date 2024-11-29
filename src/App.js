import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route } from "react-router-dom";
import Main from "./layouts/main";
import About from "./pages/about";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import Award from "./components/award/award";
import Education from "./components/education/education";
import Experience from "./components/experience/experience";
import Interest from "./components/interest/interest";
import Language from "./components/language/language";
import Objective from "./components/objective/objective";
import PersonalDetail from "./components/personalDetail/personalDetail";
import Project from "./components/project/project";
import Publication from "./components/publication/publication";
import Reference from "./components/reference/reference";
import Service from "./components/service/service";
import Skill from "./components/skill/skill";

function App() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/award-create" element={<Award />} />
        <Route path="/education-create" element={<Education />} />
        <Route path="/experience-create" element={<Experience />} />
        <Route path="/interest-create" element={<Interest />} />
        <Route path="/language-create" element={<Language />} />
        <Route path="/objective-create" element={<Objective />} />
        <Route path="/personalDetail-create" element={<PersonalDetail />} />
        <Route path="/project-create" element={<Project />} />
        <Route path="/publication-create" element={<Publication />} />
        <Route path="/reference-create" element={<Reference />} />
        <Route path="/service-create" element={<Service />} />
        <Route path="/skill-create" element={<Skill />} />
      </Routes>
    </Main>
  );
}

export default App;
