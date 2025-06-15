import React from "react";
import styles from "./Included.module.css";
import Lottie from "lottie-react";

import animationData1 from "../../animations/Animation - 1749262747213.json";
import animationData2 from "../../animations/Animation - 1749263777151.json";
import animationData3 from "../../animations/Animation - 1749264363524.json";

const Included = () => {
  return (
    <section className={styles.includedSection}>
      <h2>O que está incluído</h2>

      <div className={styles.includedItem}>
        <div className={styles.text}>
          <h3>Interface Web Intuitiva</h3>
          <p>
            Crie seus modelos com nosso editor visual de arrastar e soltar.
            Nenhuma programação é necessária.f type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged...
          </p>
        </div>
        <div style={{ width: 400, height: 300 }}>
          <Lottie animationData={animationData1} loop={true} />
        </div>
      </div>

      <div className={`${styles.includedItem} ${styles.reverse}`}>
        <div className={styles.text}>
          <h3>API Poderosa</h3>
          <p>
            Integre nossa API à sua aplicação para gerar documentos de forma
            dinâmica e eficiente...
          </p>
        </div>
        <div style={{ width: 300, height: 300 }}>
          <Lottie animationData={animationData2} loop={true} />
        </div>
      </div>

      <div className={styles.includedItem}>
        <div className={styles.text}>
          <h3>API Poderosa</h3>
          <p>
            Integre nossa API à sua aplicação para gerar documentos de forma
            dinâmica e eficiente...
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
