import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Resources from "./components/Resources";
import Footer from "./components/Footer";

export default function App(){
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" tabIndex="-1">
        <Hero />
        <Mission />
        <Resources />
      </main>
      <Footer />
    </>
  );
}
