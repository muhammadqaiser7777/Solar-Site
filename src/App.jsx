import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ScrollUp from "./components/ScrollUp";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import CompaniesSection from "./components/CompaniesSection";
import LazyLoader from "./components/LazyLoader";
import FormSection from "./components/FormSection";
import AutoScroll from "./components/AutoScroll";
import PrivacyPolicy from "./components/PrivacyPolicy";
import UserTerms from "./components/UserTerms";
import CaliforniaPrivacyNotice from "./components/CaliforniaPrivacyNotice";

function App() {
  return (
    <Router>
      <div className="bg-secondary text-white">
        <NavBar />
        <ScrollUp />
        <AutoScroll />

        <Routes>
          {/* Main Home Page */}
          <Route
            path="/"
            element={
              <>
                <div id="home" className="min-h-screen pt-24">
                  <Hero />
                </div>
                <LazyLoader />
                <div id="companies">
                  <CompaniesSection />
                </div>
              </>
            }
          />

          {/* Separate Routes for Pages */}
          <Route
            path="/form"
            element={
              <div className="min-h-screen pt-24">
                <FormSection />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div className="min-h-screen pt-24">
                <AboutUs />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="min-h-screen pt-24">
                <Contact />
              </div>
            }
          />
           <Route
            path="/privacy-policy"
            element={
              <div className="min-h-screen pt-10">
                <PrivacyPolicy />
              </div>
            }
          />
           <Route
            path="/user-terms"
            element={
              <div className="min-h-screen pt-10">
                <UserTerms />
              </div>
            }
          />
           <Route
            path="/california-privacy"
            element={
              <div className="min-h-screen pt-10">
                <CaliforniaPrivacyNotice />
              </div>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
