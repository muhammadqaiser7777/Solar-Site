import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ScrollUp from "./components/ScrollUp";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import FormSection from "./components/FormSection";

function App() {
  return (
    <Router>
      <div className="bg-black text-white">
        <NavBar />
        <ScrollUp />
        <div id="home" className="min-h-screen pt-24 bg-secondary">
          <Hero />
        </div>
        <div id="form" className="min-h-screen pt-24 bg-secondary">
          <FormSection />
        </div>
        <div id="about" className="min-h-screen pt-24 bg-secondary">
          <AboutUs />
        </div>
        <div id="contact" className="min-h-screen pt-24 bg-secondary">
          <Contact />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
