import React from "react";
import "./VideoSection.css";

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="content">
        <div className="text">
          <h2 className="title">Introdução</h2>
          <p className="description">
            Esta é uma descrição breve e direta que explica o valor ou objetivo
            do vídeo apresentado. Ela deve ser clara, envolvente e relevante
            Esta é uma descrição breve e direta que explica o valor ou objetivo
            do vídeo apresentado. Ela deve ser clara, envolvente e relevante
            para o público. para o público. Esta é uma descrição breve e direta
            que explica o valor ou objetivo do vídeo apresentado. Ela deve ser
            clara, envolvente e relevante para o público.
          </p>
          <button className="cta-button">Comprar</button>
        </div>

        <div className="video-container">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Video de exemplo"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
