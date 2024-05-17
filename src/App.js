import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import English from "./pages/english";
import German from "./pages/german";
import Croatian from "./pages/croatian";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<English />} />
        <Route path="/german" element={<German />} />
        <Route path="/croatian" element={<Croatian />} />
      </Routes>
    </Router>
  );
}

export default App;
