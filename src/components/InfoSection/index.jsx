import React from "react";
import styles from "./InfoSection.module.css";
import img1 from "../../assets/nocode-removebg-preview.png";

const InfoSection = () => {
  return (
    <section className={styles.infoSection}>
      <div className={styles.infoContent}>
        <div className={styles.textContent}>
          <h2 className={styles.infoTitle}>Crie Resultados Incríveis</h2>
          <p className={styles.infoDescription}>
            Com nossa ferramenta intuitiva, você economiza tempo e recursos
            enquanto mantém sua identidade visual. Perfeito para escalar seus
            processos com facilidade. Com nossa ferramenta intuitiva, você
            economiza tempo e recursos enquanto mantém sua identidade visual.
            Perfeito para escalar seus processos com facilidade...
          </p>
          <button className={styles.infoButton}>Saiba Mais</button>
        </div>

        <div className={styles.imageContent}>
          <img
            src={img1}
            alt="Demonstração do produto"
            className={styles.infoImage}
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
