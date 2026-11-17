export const cases = [
  {
    id: 'pratodos',
    meta: 'Global Solution FIAP · 2026 · equipe Zynox',
    title: 'Pra Todos SP',
    problem: 'promessas de governo ficam espalhadas e difíceis de acompanhar.',
    solution: 'um portal que reúne metas, mostra o andamento em um termômetro e deixa o administrador manter tudo.',
    bullets: [
      'Login de administrador com JWT e BCrypt.',
      'CRUD de promessas, com área e fonte de cada meta.',
      'Termômetro exportado em JSON, lido por um algoritmo de programação dinâmica em Python.',
      'Testes automatizados e Swagger para a API.',
    ],
    tags: ['Spring Boot 3.5', 'Oracle', 'Swagger', 'Render'],
    link: { href: 'https://pratodossp.onrender.com/', label: 'Abrir o site ↗' },
    note: 'Dados do projeto são fictícios, criados para a Global Solution.',
  },
  {
    id: 'vaox',
    meta: 'FIAP × TOTVS · 2025–2026 · equipe de 5',
    title: 'VAOX',
    problem: 'equipes comerciais perdem sinais importantes dentro das reuniões.',
    solution: 'analisar a transcrição e destacar churn, concorrentes e upsell.',
    bullets: ['Backend Java 17 e Spring Boot integrado ao Oracle SQL.', 'Análise de texto em Python com NLP.', 'Modelo de dados com 13+ entidades até a 3FN.'],
    tags: ['Java 17', 'Spring Boot', 'Oracle SQL', 'NLP'],
    link: { href: 'https://github.com/Zynos-Challenge/Java-TOTVS', label: 'Código do backend ↗' },
    flip: true,
  },
  {
    id: 'pyrosat',
    meta: 'Projeto acadêmico · algoritmos',
    title: 'PyroSat',
    problem: 'decidir para onde enviar uma equipe quando o fogo se espalha.',
    solution: 'simular a propagação em um grafo e calcular a rota mais curta até o foco.',
    bullets: ['Grafos, BFS e Dijkstra em Python.', 'Fila de prioridade (heapq) para ordenar ocorrências.', 'Dados ambientais simulados.'],
    tags: ['Python', 'BFS', 'Dijkstra', 'heapq'],
    link: { href: 'https://github.com/Zynox-GS/PyroSat', label: 'Ver código ↗' },
  },
]

// Telas do Pra Todos SP exibidas na galeria (cada uma com versões em 2 resoluções).
export const shots = [
  { id: 'inicio', label: 'Início', url: 'pratodossp.onrender.com', alt: 'Tela inicial do Pra Todos SP, com a escolha do bairro', small: ['images/pratodos-inicio-1000.webp', 1000], large: ['images/pratodos-inicio-2000.webp', 2000], ratio: [2000, 1352] },
  { id: 'promessas', label: 'Promessas', url: 'pratodossp.onrender.com/#/bairro/7', alt: 'Lista de promessas do bairro Pinheiros, com status de cada meta', small: ['images/pratodos-promessas-1000.webp', 1000], large: ['images/pratodos-promessas-2000.webp', 2000], ratio: [2000, 1844] },
  { id: 'login', label: 'Login admin', url: 'pratodossp.onrender.com/admin.html', alt: 'Tela de login do administrador do Pra Todos SP', small: ['images/pratodos-login-700.webp', 700], large: ['images/pratodos-login-1168.webp', 1168], ratio: [1168, 827] },
  { id: 'meta', label: 'Cadastrar meta', url: 'admin · cadastrar meta', alt: 'Formulário de cadastro de meta no painel administrativo', small: ['images/pratodos-meta-800.webp', 800], large: ['images/pratodos-meta-1683.webp', 1683], ratio: [1683, 1280] },
]
