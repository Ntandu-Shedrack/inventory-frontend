import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route } from "react-router-dom";
import Main from "./layouts/main";
import Register from "./pages/auth/register";

function App() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </Main>
  );
}

export default App;
