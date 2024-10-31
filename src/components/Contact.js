import React, { useState } from "react";
import Button from "./Button"; // Importar o novo componente de botão
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Olá, meu nome é ${name} e gostaria de solicitar um orçamento.`;
    const whatsappUrl = `https://wa.link/7yj9gw`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Entre em contato com a gente!</h2>
      <p>
        Tem dúvidas ou precisa de um orçamento?
        <br />
        Fale conosco pelo WhatsApp. Estamos prontos para ajudar!
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Button type="submit">Enviar</Button>
      </form>
    </section>
  );
};

export default Contact;
