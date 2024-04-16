import "./App.css";
import { Home } from "./pages/Home";
import { Indland } from "./pages/Indland";
import { Udland } from "./pages/Udland";
import { Teknologi } from "./pages/Teknologi";
import { Sport } from "./pages/Sport";
import { Politik } from "./pages/Politik";
import { Samfund } from "./pages/Samfund";
import { Members } from "./pages/Members";
import { NewsDetail } from "./pages/Newsdetail" 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/indland" element={<Indland />} />
        <Route path="/indland/:id" element={<Indland />} />
        <Route path="/udland" element={<Udland />} />
        <Route path="/udland/:id" element={<Udland />} />
        <Route path="/teknologi" element={<Teknologi />} />
        <Route path="/teknologi/:id" element={<Teknologi />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/sport/:id" element={<Sport />} />
        <Route path="/politik" element={<Politik />} />
        <Route path="/politik/:id" element={<Politik />} />
        <Route path="/samfund" element={<Samfund />} />
        <Route path="/samfund/:id" element={<Samfund />} />
        <Route path="/members" element={<Members/>} />
        {/* Dynamic route for news details */}
        <Route path="/details/:id" element={<NewsDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
