import "./App.css";
import { Home } from "./pages/Home";
import { Indland } from "./pages/Indland";
import { Udland } from "./pages/Udland";
import { Teknologi } from "./pages/Teknologi";
import { Sport } from "./pages/Sport";
import { Politik } from "./pages/Politik";
import { Samfund } from "./pages/Samfund";
import { Login } from "./pages/Login";
import { NewsDetail } from "./pages/Newsdetail" 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/wrapper";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Wrapper>
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
        <Route path="/login" element={<Login/>} />
        {/* Dynamic route for news details */}
        <Route path="/details/:id" element={<NewsDetail />} />
      </Routes>
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
