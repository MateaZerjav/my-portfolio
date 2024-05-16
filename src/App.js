import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Englisch from "./pages/englisch";
import German from "./pages/german";
import Croatian from "./pages/croatian";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Englisch />} />
        <Route path="/german" element={<German />} />
        <Route path="/croatian" element={<Croatian />} />
      </Routes>
    </Router>
  );
}

export default App;
