import React from "react";
import styles from "./VideoSection.module.css";

const VideoSection = () => {
  return (
    <section className={styles.videoSection}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.title}>Introdução</h2>
          <p className={styles.description}>
            Esta é uma descrição breve e direta que explica o valor ou objetivo
            do vídeo apresentado. Ela deve ser clara, envolvente e relevante.
            Esta é uma descrição breve e direta que explica o valor ou objetivo
            do vídeo apresentado. Ela deve ser clara, envolvente e relevante
            para o público. Esta é uma descrição breve e direta que explica o
            valor ou objetivo do vídeo apresentado. Ela deve ser clara,
            envolvente e relevante para o público.
          </p>
          <button className={styles.ctaButton}>Comprar</button>
        </div>

        <div className={styles.videoContainer}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Vídeo de exemplo"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
