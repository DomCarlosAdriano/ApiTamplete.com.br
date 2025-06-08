import React from "react";
import "./InfoSection.css";
import img1 from "../../assets/nocode-removebg-preview.png";

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="info-content">
        <div className="text-content">
          <h2 className="info-title">Crie Resultados Incríveis</h2>
          <p className="info-description">
            Com nossa ferramenta intuitiva, você economiza tempo e recursos
            enquanto mantém sua identidade visual. Perfeito para escalar seus
            processos com facilidade. Com nossa ferramenta intuitiva, você
            economiza tempo e recursos enquanto mantém sua identidade visual.
            Perfeito para escalar seus processos com facilidade. Com nossa
            ferramenta intuitiva, você economiza tempo e recursos enquanto
            mantém sua identidade visual. Perfeito para escalar seus processos
            com facilidade. Com nossa ferramenta intuitiva, você economiza tempo
            e recursos enquanto mantém sua identidade visual. Perfeito para
            escalar seus processos com facilidade.
          </p>
          <button className="info-button">Saiba Mais</button>
        </div>

        <div className="image-content">
          <img
            src={img1} 
            alt="Demonstração do produto"
            className="info-image"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
