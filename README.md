# Vão & Carga

Seleciona o perfil W/HP Gerdau mais leve para um vão e um carregamento informados. Cálculo por Estados Limites conforme a NBR 8800:2008, validado contra a "Tabela de Vãos e Cargas GERDAU" (5ª edição, 2018) — erro médio de ~0,1% em Mrd e Vrd nos 108 perfis da base.

Inclui:

- Diagrama de carregamento (reações, força cortante e momento fletor), atualizado ao vivo.
- Memorial de cálculo completo por perfil (fórmulas, substituições numéricas e resultados), com comparação direta contra os valores impressos na tabela do catálogo.
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

Os botões de exportar `.txt` e baixar o diagrama em `.png` usam um recurso disponível apenas dentro do visualizador de artefatos do Claude; fora dele (como aqui, no GitHub Pages), esses botões ficam ocultos automaticamente e o botão "Copiar" (que sempre funciona) fica como alternativa.
