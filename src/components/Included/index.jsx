import React from "react";
import "./Included.css";
import Lottie from "lottie-react";

import animationData1 from "../../animations/Animation - 1749262747213.json";
import animationData2 from "../../animations/Animation - 1749263777151.json";
import animationData3 from "../../animations/Animation - 1749264363524.json";

const Included = () => {
  return (
    <section className="included-section">
      <h2>O que está incluído</h2>

      <div className="included-item">
        <div className="text">
          <h3>Interface Web Intuitiva</h3>
          <p>
            Crie seus modelos com nosso editor visual de arrastar e soltar.
            Nenhuma programação é necessária.f type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum
          </p>
        </div>
        <div style={{ width: 400, height: 300 }}>
          <Lottie animationData={animationData1} loop={true} />
        </div>
      </div>

      <div className="included-item reverse">
        <div className="text">
          <h3>API Poderosa</h3>
          <p>
            Integre nossa API à sua aplicação para gerar documentos de forma
            dinâmica e eficiente. f type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum
          </p>
        </div>
        <div style={{ width: 300, height: 300 }}>
          <Lottie animationData={animationData2} loop={true} />
        </div>
      </div>

      <div className="included-item">
        <div className="text">
          <h3>API Poderosa</h3>
          <p>
            Integre nossa API à sua aplicação para gerar documentos de forma
            dinâmica e eficiente.f type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum
          </p>
        </div>
        <div style={{ width: 400, height: 400 }}>
          <Lottie animationData={animationData3} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Included;
