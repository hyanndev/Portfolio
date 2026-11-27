# Portfólio — Hyann dos Santos Espindas

Site de portfólio feito com **React 19**, **Tailwind CSS 4** e **Vite**. Tema claro e escuro, responsivo e sem dependências além de React.

## Como rodar

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # gera a pasta dist/
npm run preview  # abre o build para conferir
```

Requer Node 20.19 ou mais novo.

## Publicar na Vercel

1. Suba esta pasta em um repositório no GitHub (sem `node_modules` e sem `dist`, o `.gitignore` já cuida disso).
2. Na Vercel: **Add New → Project**, escolha o repositório.
3. A Vercel detecta o Vite sozinha (build `npm run build`, saída `dist`). Clique em **Deploy**.

## Estrutura

```
public/                 arquivos estáticos (imagens em 2 resoluções, currículo, favicon)
src/
  main.jsx              ponto de entrada
  App.jsx               monta a página
  index.css             Tailwind + tokens de cor (claro/escuro)
  data/                 TODO o conteúdo do site (textos, projetos, skills)
  components/
    layout/             Header, Footer
    sections/           Hero, Experience, Cases, Stack, MoreProjects, Education, Contact
    cases/              visuais dos projetos (galeria, reunião, Estudaí, Desconfia)
    ui/                 peças reutilizáveis (Button, Tag, Section, BrowserFrame, JsonView)
  hooks/                useTheme, useCopy
  lib/asset.js          resolve caminhos de /public
```

Para mudar um texto, edite o arquivo em `src/data/`. Não precisa mexer nos componentes.

## Otimizações

- Imagens em WebP com `srcset`: celulares baixam a versão menor.
- `width` e `height` em todas as imagens (sem pulo de layout) e `loading="lazy"` abaixo da dobra.
- Foto principal com `fetchpriority="high"` e pré-carregada.
- React em um chunk separado, para cache melhor entre atualizações.
- Tailwind gera só o CSS usado; sem bibliotecas de UI.
- Tema aplicado antes da primeira pintura (sem flash).
- Animações só com `transform` e `opacity` (rodam na GPU): o cartão do topo flutua e pausa quando sai da tela; os blocos aparecem ao rolar via IntersectionObserver, sem ficar medindo o scroll.
- Layout sem rolagem lateral em celulares e com margem para a área segura (notch).
- Navegação por teclado com foco visível e abas com os atributos ARIA corretos.
