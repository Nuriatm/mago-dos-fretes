import React from "react";
import "./ProductsSection.css";

const ProductsSection = () => {
  return (
    <section id="products" className="products-section">
      <h2>Nossos Serviços</h2>
      <div className="products">
        <div className="product">
          <h3>Tipos de Veículos</h3>
          <p>
            Oferecemos uma ampla gama de veículos, incluindo{" "}
            <span>vans, VUCs e caminhões</span>, adaptados para diferentes
            necessidades de carga.
          </p>
        </div>
        <div className="product">
          <h3>Refrigeração</h3>
          <p>
            Nossos veículos são equipados com sistemas de{" "}
            <span>refrigeração de última geração</span> para garantir a
            <span> qualidade</span> e a <span>segurança</span> dos produtos.
          </p>
        </div>
        <div className="product">
          <h3>MOPP</h3>
          <p>
            Certificação <span>MOPP</span> que atesta a{" "}
            <span>conformidade</span> e <span>segurança</span> no transporte de
            produtos <span>perigosos</span> e <span>especializados</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
