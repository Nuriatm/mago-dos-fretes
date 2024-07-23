import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <ul>
          <li>
            <a href="#hero" onClick={(e) => handleScroll(e, "hero")}>
              Início
            </a>
          </li>
          <li>
            <a href="#products" onClick={(e) => handleScroll(e, "products")}>
              Serviços
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleScroll(e, "about")}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
