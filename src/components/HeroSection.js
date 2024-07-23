import React from "react";
import "./HeroSection.css";
import Logo from "../assets/logo.png";
import Button from "./Button";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const HeroSection = () => {
  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactRedirect = () => {
    const message = "Gostaria de solicitar um orçamento.";
    const whatsappUrl = `https://wa.me/5516996109672?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <img src={Logo} alt="Logo" className="hero-logo" />
        <h1>MAGO DOS FRETES</h1>
        <p>
        <span className="span">A Magia da Logística em cada entrega.</span>
          <br />
          <br />
          Com anos de experiência, oferecemos serviços rápidos, seguros e
          eficientes para todas as suas necessidades de transporte.
        </p>

        <div className="button-container">
          <Button
            type="button"
            onClick={handleContactRedirect}
            icon={faWhatsapp}
            className="custom-button"
          >
            Solicite um orçamento
          </Button>
          <Button
            type="button"
            onClick={handleScrollToAbout}
            className="custom-button transparent"
          >
            Saiba Mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
