import React from "react";
import Navbar from "../src/components/Navbar";
import HeroSection from "../src/components/HeroSection";
import ProductsSection from "../src/components/ProductsSection";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
