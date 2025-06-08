import React from 'react';
import './KeyFeatures.css';

const KeyFeatures = () => {
  return (
    <section className="features">
      <h2>Principais Funcionalidades</h2>
      <div className="features-container">
        <div className="feature-card">
          <span role="img" aria-label="Documento">🎨</span>
          <strong>Modelos Personalizáveis</strong>
        </div>
        <div className="feature-card">
          <span role="img" aria-label="Engrenagem">⚙️</span>
          <strong>Integração com API</strong>
        </div>
        <div className="feature-card">
          <span role="img" aria-label="Nuvem">📄</span>
          <strong>Geração de Relatorios Automatizados</strong>
        </div>
         <div className="feature-card">
          <span role="img" aria-label="Nuvem">📲</span>
          <strong>Suporte para ferramenteas No/Low Code</strong>
        </div>
         <div className="feature-card">
          <span role="img" aria-label="Nuvem">📦</span>
          <strong>Exportar em PDF</strong>
        </div>
      </div>    
    </section>
  );
};

export default KeyFeatures;
