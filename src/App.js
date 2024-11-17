import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route } from "react-router-dom";
import Main from "./layouts/main";
import About from "./pages/about";
import Resume from "./pages/resume";
import Contact from "./pages/contact";

function App() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Main>
  );
}

export default App;
