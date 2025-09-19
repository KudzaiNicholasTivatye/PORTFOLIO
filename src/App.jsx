import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PortfolioButtons from "./components/PortfolioButtons";
import About from "./components/About"; // Import the About section

const App = () => {
  return (
    <Router>
      {/* Navbar stays visible across all pages */}
      

      <Routes>
        {/* Home route with Hero */}
        <Route
          path="/"
          element={
            <div>
              <Hero />
            
            </div>
          }
        />

        {/* About Me route */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
