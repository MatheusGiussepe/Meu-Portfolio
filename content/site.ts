// Todo o conteúdo do site fica aqui. Edite este arquivo e o resto se ajusta.

export type Project = {
  title: string;
  year: string;
  description: string;
  stack: string[];
  /** Caminho de uma captura de tela em /public, ex.: "/projects/elmosys-login.png" */
  image?: string;
  status?: string;
  /** "producao" ou "desenvolvimento" */
  state: "producao" | "desenvolvimento";
  live?: string;
};

export type Job = {
  period: string;
  role: string;
  company: string;
  summary: string;
  current?: boolean;
};

export type Service = {
  title: string;
  text: string;
};

export type Principle = {
  icon: "search" | "flow" | "rocket";
  title: string;
  text: string;
};

export const site = {
  name: "Matheus Giussepe",
  fullName: "Matheus Giussepe Possamai de Carlucci",
  role: "Desenvolvedor full-stack",
  url: "https://seu-dominio.vercel.app", // TODO: domínio final depois do deploy
  email: "Mgiussepe26@gmail.com",
  phone: "(47) 99930-6802",
  whatsapp: "https://wa.me/5547999306802",

  headline: "Se é feito à mão, eu automatizo.",
  intro:
    "Desenvolvedor full-stack. Sites, sistemas sob medida, automações e soluções com IA, da ideia ao deploy.",

  projects: [
    {
      title: "Elmosys",
      year: "2025",
      description:
        "Sistema de gestão de pessoal para uma empresa de terceirização de mão de obra. Reúne folhas de ponto com ajustes e horas extras, cálculo de vale alimentação e ajuda de custo por dia, escalas por empresa cliente, boletins consolidados em PDF e controle de acesso por usuário, com sincronização automática com a Solides.",
      stack: ["Next.js", "Node.js", "PostgreSQL"],
      state: "producao",
      image: "/projects/elmosys-login.png",
    },
    {
      title: "Portaria",
      year: "2026",
      description:
        "Controle de portaria para condomínios. Registro de visitantes, prestadores e entregas, acesso dos moradores pelo CPF com código de ativação e histórico de todas as ações da equipe.",
      stack: ["React", "Node.js", "SQLite"],
      state: "producao",
      image: "/projects/portaria-login.png",
    },
    {
      title: "LessPay",
      year: "2026",
      description:
        "App que traduz o mundo tributário para pequenas e médias empresas. Mostra quanto do faturamento vai para imposto e quanto sobra de lucro, dá uma nota de saúde fiscal com missões para melhorar e tem a Lessy, assistente de IA que explica em linguagem simples e encaminha para um especialista quando preciso.",
      stack: ["Next.js", "PostgreSQL"],
      state: "desenvolvimento",
      image: "/projects/lesspay.png",
    },
  ] as Project[],

  services: [
    {
      title: "Sites e landing pages",
      text: "Rápidos, responsivos e prontos para aparecer no Google. Do institucional à página de venda.",
    },
    {
      title: "Sistemas sob medida",
      text: "Painéis internos, cadastros, controle de acesso por perfil e relatórios em PDF, feitos para a regra do seu negócio.",
    },
    {
      title: "Automação de processos",
      text: "Cálculos, conferências e rotinas que dependiam de alguém lembrar passam a rodar sozinhas, com histórico.",
    },
    {
      title: "Inteligência artificial",
      text: "Assistentes e chatbots que respondem com base nos seus dados, leitura de documentos e classificação automática.",
    },
    {
      title: "Integrações e APIs",
      text: "Conecto o que não conversa: sistemas de RH e ponto, ERPs, WhatsApp, pagamentos e bancos de dados.",
    },
    {
      title: "Parametrização",
      text: "Regras, cálculos e fluxos configuráveis, para o sistema acompanhar a empresa sem precisar de código novo.",
    },
  ] as Service[],

  about:
    "Resolvo problema de ponta a ponta. Entendo como o negócio funciona, desenho a solução e coloco no ar, seja um site, um sistema interno, uma automação ou uma integração com IA.",

  principles: [
    {
      icon: "search",
      title: "Entender o processo",
      text: "Antes do código, acompanho como a equipe trabalha e onde o tempo se perde.",
    },
    {
      icon: "flow",
      title: "Construir do jeito certo",
      text: "Código limpo, dados organizados e segurança desde o início, para crescer sem virar gambiarra.",
    },
    {
      icon: "rocket",
      title: "Entregar e ajustar",
      text: "Publico em produção cedo e refino junto com quem usa no dia a dia.",
    },
  ] as Principle[],

  experience: [
    {
      period: "jul 2024 → hoje",
      role: "Desenvolvedor de sistemas e automação de processos",
      company: "Elmo Gestão de Serviços",
      summary:
        "Desenvolvimento de sistemas internos, incluindo a automação do cálculo de horas para gestão de ponto e apuração de jornadas de trabalho.",
      current: true,
    },
    {
      period: "abr 2022 → hoje",
      role: "Desenvolvedor full-stack freelancer",
      company: "Projetos independentes",
      summary:
        "Sites, sistemas e automações sob demanda para empresas e profissionais, com integrações e recursos de IA quando fazem sentido. Do levantamento do problema até a entrega em produção.",
      current: true,
    },
  ] as Job[],

  links: {
    github: "https://github.com/MatheusGiussepe",
    linkedin: "https://www.linkedin.com/in/matheusgiussepe/",
  },
};
