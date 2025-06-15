import React from "react";
import styles from "./HeroSection.module.css";
import docImage from "../../assets/inicial.webp";

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>
          Gere automaticamente PDFs com nossa poderosa API
        </h1>

        <p>
          Nossa API torna a geração de PDFs e imagens rápida, simples e
          escalável — perfeita para faturas, relatórios e modelos.
        </p>

        <ul className={styles.featuresList}>
          <li>Gere automaticamente banners e imagens</li>
          <li>Integração com Zapier, Make.com, N8n ou API REST</li>
          <li>Já geramos milhões de PDFs e imagens</li>
          <li>Suporte a editor WYSIWYG e templates em HTML</li>
        </ul>

        <button className={styles.ctaButtonHero}>Cadastre-se agora</button>
        <p className={styles.note}>
          Comece grátis, <strong>sem necessidade de cartão de crédito</strong>
        </p>
      </div>

      <div className={styles.heroImage}>
        <img src={docImage} alt="Document illustration" />
      </div>
    </section>
  );
}

export default HeroSection;
