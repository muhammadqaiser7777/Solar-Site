import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ScrollUp from "./components/ScrollUp";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import FormSection from "./components/FormSection";
import CompaniesSection from "./components/CompaniesSection";
import LazyLoader from "./components/LazyLoader";
import Test from "./pages/test";

function App() {
  return (
    <Router>
      <div className="bg-secondary text-white">
        <NavBar />
        <ScrollUp />
        <div id="home" className="min-h-screen pt-24 ">
          <Hero />
        </div>
        <div id="form" className="min-h-screen pt-24">
          <FormSection />
        </div>
        <LazyLoader />
        <div id="about" className="min-h-screen pt-24">
          <AboutUs />
        </div>
        <div id="companies">
          <CompaniesSection/>
        </div>
        <div id="contact" className="min-h-screen pt-24 ">
          <Contact />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
