import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Logo e descrição */}
        <div className={styles.footerSection}>
          <h2 className={styles.logo}>MinhaMarca</h2>
          <p className={styles.footerDescription}>
            Soluções inteligentes para seu negócio crescer. Conecte-se com o futuro.
          </p>
        </div>

        {/* Links úteis */}
        <div className={styles.footerSection}>
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div className={styles.footerSection}>
          <h3>Siga-nos</h3>
          <div className={styles.socialIcons}>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} MinhaMarca. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
