export const profile = {
  name: 'Hyann dos Santos Espindas',
  shortName: 'hyann',
  email: 'contato.hyann@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hyann-dos-santos-espindas-2558a4356',
  github: 'https://github.com/hyanndossantosespindas',
  cv: 'docs/Curriculo_Hyann.pdf',
  photo: { small: 'images/hyann-240.webp', large: 'images/hyann-720.webp' },
  location: 'São Paulo, SP',
}

// Conteúdo mostrado no cartão "resposta de API" do topo da página.
export const apiTabs = [
  {
    id: 'perfil',
    label: 'GET /hyann',
    data: {
      nome: 'Hyann dos Santos Espindas',
      curso: 'Eng. de Software, FIAP',
      semestre: 4,
      foco: 'backend Java + Oracle',
      procura: 'estágio',
      cidade: 'São Paulo, SP',
    },
  },
  {
    id: 'stack',
    label: 'GET /stack',
    data: {
      linguagens: ['Java', 'Python', 'SQL'],
      backend: ['Spring Boot', 'JPA', 'JWT'],
      banco: 'Oracle',
      front: ['React', 'Tailwind'],
      testes: ['JUnit 5', 'Mockito'],
    },
  },
  {
    id: 'projetos',
    label: 'GET /projetos',
    data: [
      { nome: 'Pra Todos SP', ano: 2026 },
      { nome: 'VAOX', parceiro: 'TOTVS' },
      { nome: 'PyroSat', algoritmos: 'BFS, Dijkstra' },
      { nome: 'Passa a Bola' },
      { nome: 'GreenHub' },
    ],
  },
]

export const facts = [
  { title: '5 projetos', text: 'em equipe e individuais' },
  { title: 'Java · Python · SQL', text: 'principais linguagens' },
  { title: '2025 → hoje', text: 'FIAP, 4º semestre' },
]
