import "./App.css";
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/indland" element={<Indland />} />
        <Route path="/udland" element={<Udland />} />
        <Route path="/teknologi" element={<Teknologi />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/politik" element={<Politik />} />
        <Route path="/samfund" element={<Samfund />} />
        <Route path="/members" element={<Members/>} />
      </Routes>
    </Router>
  );
}

export default App;