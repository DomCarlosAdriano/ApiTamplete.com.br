import React from 'react';
import styles from './KeyFeatures.module.css';

const KeyFeatures = () => {
  return (
    <section className={styles.features}>
      <h2>Principais Funcionalidades</h2>
      <div className={styles.featuresContainer}>
        <div className={styles.featureCard}>
          <span role="img" aria-label="Documento">🎨</span>
          <strong>Modelos Personalizáveis</strong>
        </div>
        <div className={styles.featureCard}>
          <span role="img" aria-label="Engrenagem">⚙️</span>
          <strong>Integração com API</strong>
        </div>
        <div className={styles.featureCard}>
          <span role="img" aria-label="Nuvem">📄</span>
          <strong>Geração de Relatórios Automatizados</strong>
        </div>
        <div className={styles.featureCard}>
          <span role="img" aria-label="Mobile">📲</span>
          <strong>Suporte para Ferramentas No/Low Code</strong>
        </div>
        <div className={styles.featureCard}>
          <span role="img" aria-label="Caixa">📦</span>
          <strong>Exportar em PDF</strong>
        </div>
      </div>    
    </section>
  );
};

export default KeyFeatures;
