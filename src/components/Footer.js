import React from "react";
import "./Footer.css"; // Certifique-se de criar esse arquivo CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 MAGO DOS FRETES. Todos os direitos reservados.</p>
        <p>Nos acompanhe também nas redes sociais!</p>
        <div className="social-links">
          <a
            href="https://www.instagram.com/magodosfretes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i> <p>@magodosfretes</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
