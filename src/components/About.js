import React from "react";
import "./About.css";
import aboutImage from "../assets/about-image.jpg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="text-column">
          <h2>Sobre Nós</h2>
          <p>
            Com uma frota de mais de{" "}
            <span className="highlight">2.000 veículos</span>, atuamos em{" "}
            <span className="highlight">todo o Brasil</span> para atender suas
            demandas logísticas com agilidade e eficiência. <br />
            <br />
            Nossos serviços incluem{" "}
            <span className="highlight">fretes rastreados, refrigerados e de cargas perigosas</span>,
            garantindo a <span className="highlight">integridade</span> e{" "}
            <span className="highlight">segurança</span> dos seus produtos. Além
            disso, garantimos a{" "}
            <span className="highlight">certificação Mopp</span>, refletindo
            nosso compromisso com <span className="highlight">segurança</span>.{" "}
            <br />
            <br />
            Com <span className="highlight">8 anos de experiência</span>, o Mago
            dos Fretes é sinônimo de{" "}
            <span className="highlight">confiança</span> e{" "}
            <span className="highlight">excelência</span>. <br />
            <br />
            Descubra como podemos{" "}
            <span className="highlight">transformar sua logística</span> e
            elevar seus negócios ao próximo nível.
          </p>
        </div>
        <div className="image-column">
          <img src={aboutImage} alt="Sobre Nós" />
        </div>
      </div>
    </section>
  );
};

export default About;
