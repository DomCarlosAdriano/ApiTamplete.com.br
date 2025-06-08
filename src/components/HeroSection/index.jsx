import React from "react";
import "./HeroSection.css";
import docImage from "../../assets/inicial.webp";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Gere automaticamente PDFs com nossa poderosa API
        </h1>

        <p>
          Nossa API torna a geração de PDFs e imagens rápida, simples e
          escalável — perfeita para faturas, relatórios e modelos.
        </p>

        <ul className="features-list">
          <li>Gere automaticamente banners e imagens</li>
          <li>Integração com Zapier, Make.com, N8n ou API REST</li>
          <li>Já geramos milhões de PDFs e imagens</li>
          <li>Suporte a editor WYSIWYG e templates em HTML</li>
        </ul>

        <button className="cta-button-hero">Cadastre-se agora</button>
        <p className="note">
          Comece grátis, <strong>sem necessidade de cartão de crédito</strong>
        </p>
      </div>

      <div className="hero-image">
        <img src={docImage} alt="Document illustration" />
      </div>
    </section>
  );
}

export default HeroSection;
