import React from 'react';
import './Beneficios.css';

const Beneficios = () => {
  return (
    <section className="beneficios-section">
      <h2 className="beneficios-title">Crie Uma Vez, Reutilize Sempre</h2>
      <p className="beneficios-subtitle">
        Crie imagens e PDFs de forma reutilizável com alta eficiência
      </p>

      <div className="beneficios-grid">
        <div className="beneficio">
          <div className="beneficio-icon">🤖</div>
          <h3>Integrações Sem Código</h3>
          <p>Integre com Zapier, Make.com, n8n ou nossa API REST sem precisar programar.</p>
        </div>

        <div className="beneficio">
          <div className="beneficio-icon">🌍</div>
          <h3>APIs Regionais</h3>
          <p>Desempenho rápido e conformidade com dados locais em várias regiões.</p>
        </div>

        <div className="beneficio">
          <div className="beneficio-icon">🧰</div>
          <h3>Editor de Modelos Intuitivo</h3>
          <p>Editor visual com suporte a HTML e WYSIWYG para personalização total.</p>
        </div>

        <div className="beneficio">
          <div className="beneficio-icon">⚙️</div>
          <h3>Processamento Paralelo</h3>
          <p>Requisições síncronas e assíncronas com retorno automático via webhook.</p>
        </div>

        <div className="beneficio">
          <div className="beneficio-icon">🖥️</div>
          <h3>Pré-visualização em Tempo Real</h3>
          <p>Visualize seu conteúdo lado a lado enquanto edita.</p>
        </div>

        <div className="beneficio">
          <div className="beneficio-icon">📄</div>
          <h3>+10 Milhões de Arquivos Gerados</h3>
          <p>Documentos e imagens gerados para clientes no mundo todo.</p>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
