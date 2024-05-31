import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import English from "./pages/english";
import German from "./pages/german";
import Croatian from "./pages/croatian";
import EnForm from "./pages/enform";
import HrForm from "./pages/hrform";
import DeuForm from "./pages/deuform";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<English />} />
        <Route path="/german" element={<German />} />
        <Route path="/croatian" element={<Croatian />} />
        <Route path="/enform" element={<EnForm />} />
        <Route path="/hrform" element={<HrForm />} />
        <Route path="/deuform" element={<DeuForm />} />
      </Routes>
    </Router>
  );
}

export default App;
