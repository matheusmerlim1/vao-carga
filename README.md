# Vão & Carga

**Demo:** https://matheusmerlim1.github.io/vao-carga/

Seleciona o perfil W/HP Gerdau mais leve para um vão e um carregamento informados. Cálculo por Estados Limites conforme a NBR 8800:2008, validado contra a "Tabela de Vãos e Cargas GERDAU" (5ª edição, 2018) — erro médio de ~0,1% em Mrd e Vrd nos 108 perfis da base.

Inclui:

- Diagrama de carregamento (reações, força cortante e momento fletor), atualizado ao vivo.
- **Escolha do perfil**: botão `Selecionar` em cada cartão e uma lista suspensa na barra de relatórios. A escolha sobrevive a um recálculo (mudar vão, carga ou mostrar mais alternativas) e é ela que alimenta os dois relatórios.
- **Relatório PDF** do perfil escolhido (impressão do navegador → *Salvar como PDF*).
- **Relatório Word (.docx) editável** do mesmo perfil, gerado no próprio navegador — ZIP e OOXML escritos à mão, sem biblioteca externa — e aberto no Word, LibreOffice ou Google Docs. Não vai protegido: todo o texto, as tabelas e as figuras podem ser editados.
- Os dois relatórios trazem o mesmo conteúdo (6 páginas na viga, 4 na coluna):
  - **Resumo da verificação**: solicitante, resistente, aproveitamento em % e situação de cada estado-limite;
  - **Figura 1** — diagrama de carregamento com reações, força cortante e momento fletor, já com o tipo de carregamento e os valores de pico (nas colunas, o esquema de flambagem em cada eixo);
  - **Figura 2** — desenho cotado da seção transversal do perfil (d, bf, tf, tw, h e os eixos x-x e y-y);
  - o memorial completo descrito abaixo.
- Memorial de cálculo passo a passo, idêntico na tela, no PDF e no Word:
  - **A** — todas as variáveis de entrada, com símbolo, descrição, valor, unidade e origem;
  - **B** — constantes e critérios adotados (f_y, E, σ_r, coeficiente 1,65, conversão kN ↔ tf) com a referência normativa de cada um;
  - **C** — propriedades geométricas do perfil, como publicadas na tabela GERDAU;
  - passos numerados, cada um com fórmula, substituição numérica, resultado e uma nota explicando por que aquele passo existe (26 passos na viga, 15 na coluna);
  - **D** — resumo das variáveis de saída, dizendo em qual passo cada uma foi obtida, e a conclusão da verificação.
- Comparação direta contra os valores impressos na tabela do catálogo.
- As figuras são rasterizadas a partir dos próprios SVG da tela (2×, fundo branco). Se o navegador não conseguir rasterizar, o documento sai completo, apenas sem os desenhos.
- Exportação das fórmulas para colar no SMath Studio, e download da imagem do diagrama.
- Tema claro/escuro.

Estrutura simples — `index.html` + `css/style.css` + `js/script.js` —, sem build, sem dependências além de uma fonte do Google Fonts.

## Publicar no GitHub Pages

1. Suba esta pasta (mantendo `index.html`, `css/` e `js/` juntos) para um repositório no GitHub (o `index.html` deve ficar na raiz do repositório, ou na raiz da branch/pasta escolhida no passo 3).
2. No repositório, vá em **Settings → Pages**.
3. Em **Source**, escolha a branch (ex.: `main`) e a pasta (`/root` se este `index.html` estiver na raiz do repo, ou `/vao-carga-web` se ele estiver dentro de um repositório maior).
4. Salve. Em alguns minutos a página fica disponível em `https://<seu-usuario>.github.io/<nome-do-repo>/`.

## Rodar localmente

Basta abrir `index.html` no navegador — não precisa de servidor.

## Limitações

Ferramenta de pré-dimensionamento. Assume viga travada lateralmente (Lb ≤ Lp — a ferramenta avisa quando isso não é atendido) e não substitui a verificação e a ART de um engenheiro responsável.

Os relatórios em PDF e em Word funcionam em qualquer navegador. Já os botões de exportar `.txt` (SMath) e de baixar o diagrama em `.png` usam um recurso disponível apenas dentro do visualizador de artefatos do Claude; fora dele (como aqui, no GitHub Pages), o download do diagrama fica oculto automaticamente e a exportação para o SMath cai para "copiar para a área de transferência".
