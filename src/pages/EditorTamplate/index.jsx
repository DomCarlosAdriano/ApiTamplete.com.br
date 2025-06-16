import React, { useEffect } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-blocks-basic";
import "./EditorPage.css";

function EditorTemplate() {
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      height: "100vh",
      width: "auto",
      storageManager: false,
      plugins: ["gjs-blocks-basic"],
    });

    // Bloco Header
    editor.BlockManager.add("header-block", {
      label: "Header",
      category: "Basic",
      content: `
        <header style="padding: 20px; background-color: #eee; text-align: center;">
          <h1>Meu Site</h1>
          <nav>
            <a href="#" style="margin: 0 10px;">Início</a>
            <a href="#" style="margin: 0 10px;">Sobre</a>
            <a href="#" style="margin: 0 10px;">Contato</a>
          </nav>
        </header>
      `,
    });

    // Bloco Footer
    editor.BlockManager.add("footer-block", {
      label: "Footer",
      category: "Basic",
      content: `
        <footer style="padding: 20px; background-color: #f5f5f5; text-align: center;">
          <p>© 2025 Minha Empresa. Todos os direitos reservados.</p>
        </footer>
      `,
    });

    // Bloco Tabela
    editor.BlockManager.add("table-block", {
      label: "Tabela",
      category: "Basic",
      content: `
        <table style="width:100%; border-collapse: collapse;">
          <thead>
            <tr>
              <td style="border: 1px solid #000; padding:5px;">Cabeçalho 1</td>
              <td style="border: 1px solid #000; padding:5px;">Cabeçalho 2</td>
              <td style="border: 1px solid #000; padding:5px;">Cabeçalho 3</td>
              <td style="border: 1px solid #000; padding:5px;">Cabeçalho 4</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid #000; padding:5px;">Dado 1</td>
              <td style="border: 1px solid #000; padding:5px;">Dado 2</td>
              <td style="border: 1px solid #000; padding:5px;">Dado 3</td>
              <td style="border: 1px solid #000; padding:5px;">Dado 4</td>
            </tr>
          </tbody>
        </table>
      `,
    });

    editor.setComponents(
      "<h1>Bem-vindo ao GrapesJS!</h1><p>Arraste uma tabela do painel esquerdo.</p>"
    );

    // Inserir texto
    const insertText = () => {
      const input = document.getElementById("inputText");
      const selected = editor.getSelected();
      if (selected) {
        const tag = selected.get("tagName");
        if (tag === "td" || tag === "th") {
          selected.components(input.value);
        } else {
          alert("Selecione uma célula da tabela (td ou th)");
        }
      } else {
        alert("Nenhum elemento selecionado");
      }
    };

    // Exportar HTML
    const exportHTML = () => {
      const html = editor.getHtml();
      const css = editor.getCss();

      const domParser = new DOMParser();
      const doc = domParser.parseFromString(html, "text/html");

      const header = doc.querySelector("header");
      const footer = doc.querySelector("footer");

      if (header && footer) {
        header.insertAdjacentElement("afterend", footer);
      }

      let htmlWithFooter = doc.body.innerHTML;

      htmlWithFooter = htmlWithFooter.replace(
        /<tbody>([\s\S]*?)<\/tbody>/,
        `<tbody>
          {{#each funcionarios}}
          $1
          {{/each}}
        </tbody>`
      );

      const extraCSS = `
        th, td {
          border: 1px solid #ccc;
          padding: 6px;
          text-align: left;
          font-size: 10pt;
        }
        @page {
          margin: 30mm 15mm 30mm 15mm;
          @top-left {
            content: element(header);
          }
          @bottom-right {
            content: element(footer);
            content: "Página " counter(page) " de " counter(pages);
          }
        }
        header {
          position: running(header);
        }
        footer {
          position: running(footer);
        }
      `;

      const fullHtml = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Template Exportado</title>
          <style>
            ${extraCSS}
            ${css}
          </style>
        </head>
        <body>
          ${htmlWithFooter}
        </body>
        </html>
      `.trim();

      const blob = new Blob([fullHtml], { type: "text/html" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "template.html";
      link.click();
    };

    // Atribuir eventos aos botões após montagem
    setTimeout(() => {
      document.getElementById("btnInsert").onclick = insertText;
      document.getElementById("btnExport").onclick = exportHTML;
    }, 500);
  }, []);

  return (
    <>
      <div id="gjs"></div>

      <div className="toolbar">
        <input type="text" id="inputText" placeholder="Digite o texto" />
        <button id="btnInsert">Inserir Texto</button>
      </div>

      <div className="toolbar1">
        <button id="btnExport">Exportar Código</button>
      </div>

      <div className="toolbar2">
        <button>Voltar à Home</button>
      </div>
    </>
  );
}

export default EditorTemplate;
