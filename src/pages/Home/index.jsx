import React from "react";
import styles from "./Home.module.css";

function HomeDashboard() {
  const user = {
    name: "Carlos",
    totalCredits: 120,
    usedCredits: 50,
    creditsExpiryDate: "2025-12-31",
  };

  // Adicionei campo imageUrl para cada template
  const templates = [
    {
      id: "t1a2b31",
      name: "Template 1",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEO7WKmXqRLgPy46ipG6q5CXp8Beur3bfUvw&s",
    },
    {
      id: "t4c5d62",
      name: "Template 2",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjYX6EGYmlYEemcc3Fu58xoJI5aq8P2a-F3A&s",
    },
    {
      id: "t7e8f93",
      name: "Template 3",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDeer1HSp51fjJYP6eF98nA6br4dq7KYTpxg&s",
    },
    {
      id: "t7e8f94",
      name: "Template 3",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDeer1HSp51fjJYP6eF98nA6br4dq7KYTpxg&s",
    },
    {
      id: "t7e8f95",
      name: "Template 3",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDeer1HSp51fjJYP6eF98nA6br4dq7KYTpxg&s",
    },
     {
      id: "t4c5d66",
      name: "Template 2",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjYX6EGYmlYEemcc3Fu58xoJI5aq8P2a-F3A&s",
    },
    {
      id: "t7e8f97",
      name: "Template 3",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDeer1HSp51fjJYP6eF98nA6br4dq7KYTpxg&s",
    },
    {
      id: "t7e8f98",
      name: "Template 3",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDeer1HSp51fjJYP6eF98nA6br4dq7KYTpxg&s",
    },
    {
      id: "t7e8f99",
      name: "Template 3",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDeer1HSp51fjJYP6eF98nA6br4dq7KYTpxg&s",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.welcome}>Seja bem-vindo, {user.name}</h2>

      <div className={styles.userInfo}>
        <div className={styles.infoCard}>
          <span role="img" aria-label="creditos totais">💰</span>
          <div>
            <p className={styles.infoTitle}>Créditos totais</p>
            <p className={styles.infoValue}>{user.totalCredits}</p>
          </div>
        </div>

        <div className={styles.infoCard}>
          <span role="img" aria-label="creditos usados">📉</span>
          <div>
            <p className={styles.infoTitle}>Créditos usados</p>
            <p className={styles.infoValue}>{user.usedCredits}</p>
          </div>
        </div>

        <div className={styles.infoCard}>
          <span role="img" aria-label="templates criados">🗂️</span>
          <div>
            <p className={styles.infoTitle}>Templates criados</p>
            <p className={styles.infoValue}>{templates.length}</p>
          </div>
        </div>

        <div className={styles.infoCard}>
          <span role="img" aria-label="expiração">⏳</span>
          <div>
            <p className={styles.infoTitle}>Expira em</p>
            <p className={styles.infoValue}>{user.creditsExpiryDate}</p>
          </div>
        </div>
      </div>

      <div className={styles.templatesHeader}>
        <h3>Templates</h3>
        <button
          className={styles.createButton}
        >
          Criar novo template
        </button>
      </div>

      <div className={styles.templatesList}>
        {templates.length === 0 ? (
          <p className={styles.noTemplates}>Nenhum template criado ainda.</p>
        ) : (
          templates.map(function (template) {
            return (
              <div key={template.id} className={styles.templateCard}>
                <img
                  src={template.imageUrl}
                  alt={`Imagem do ${template.name}`}
                  className={styles.templateImage}
                />
                <div className={styles.templateInfo}>
                  <p className={styles.templateName}>{template.name}</p>
                  <p className={styles.templateId}>ID: {template.id}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default HomeDashboard;
