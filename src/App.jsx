import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ResourcesPage from "./pages/ResourcesPage";

export default function App() {
  return (
    <Router>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
