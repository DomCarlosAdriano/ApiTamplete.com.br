import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo e descrição */}
        <div className="footer-section">
          <h2 className="logo">MinhaMarca</h2>
          <p className="footer-description">
            Soluções inteligentes para seu negócio crescer. Conecte-se com o futuro.
          </p>
        </div>

        {/* Links úteis */}
        <div className="footer-section">
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div className="footer-section">
          <h3>Siga-nos</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MinhaMarca. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
