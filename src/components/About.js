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
            <span className="highlight">1.000 veículos leves</span>, estamos
            presentes em <span className="highlight">todas</span> as regiões do{" "}
            <span className="highlight">Brasil</span>, prontos para atender suas
            necessidades logísticas com máxima eficiência. <br />
            <br />
            Oferecemos{" "}
            <span className="highlight">fretes rastreados e refrigerados</span>,
            garantindo a <span className="highlight">integridade</span> e{" "}
            <span className="highlight">segurança</span> dos seus produtos. Além
            disso, possuímos{" "}
            <span className="highlight">certificação Mopp</span>, um selo de
            qualidade que comprova nosso compromisso com{" "}
            <span className="highlight">segurança</span> e{" "}
            <span className="highlight">conformidade</span>. <br />
            Com <span className="highlight">7 anos de experiência</span>, o MAGO
            DOS FRETES é sinônimo de{" "}
            <span className="highlight">confiança</span> e{" "}
            <span className="highlight">excelência</span>. <br />
            <br />Veja como podemos{" "}
            <span className="highlight">otimizar sua logística</span> e fazer a
            diferença no seu negócio. Entre em contato e descubra a{" "}
            <span className="highlight">qualidade</span> dos nossos serviços!
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
