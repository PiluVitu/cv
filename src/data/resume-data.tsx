import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { ConsultlyLogo, NSNLogo, ParabolLogo } from "@/images/logos";

export const RESUME_DATA = {
  name: "Paulo Victor Torres Silva",
  initials: "PV",
  location: "Brasil, PI, Teresina",
  locationLink:
    "https://www.google.com/maps/place/PiluTech/@-5.0983437,-42.7429983,15z/data=!4m6!3m5!1s0x202b875dce4b0c91:0xaca1a8d988c0401e!8m2!3d-5.0983437!4d-42.7429983!16s%2Fg%2F11srxwpwct?entry=ttu",
  about: "Desenvolvedor Web TypeScript | React | NodeJS.",
  summary:
    "Desenvolvedor Web Full Stack com foco em TypeScript, React e NodeJS, determinado a criar aplicações inovadoras que aprimorem a qualidade de vida das pessoas. Ativamente em busca de oportunidades profissionais para contribuir com minha paixão pelo desenvolvimento web.",

  personalWebsiteUrl: "https://piluvitu.dev",
  contact: {
    email: "pilutechinformatica@gmail.com",
    tel: "86981737625",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/PiluVitu",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pilu-vitu/",
        icon: LinkedInIcon,
      },
      {
        name: "Twitter",
        url: "http://piluvitu.dev/twitter",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Descomplica Faculdade Digital",
      degree: "Ciência da Computação",
      start: "2022",
      end: "2025",
    },
  ],
  work: [
    {
      company: "DevHat",
      link: "https://github.com/devhatt",
      badges: ["Remoto"],
      title: "Desenvolvedor Full-Stack",
      logo: ParabolLogo,
      start: "2023",
      end: "Atual",
      description:
        "- Desenvolvimento de novos componentes utilizando TSX(React com Typescript).\n- Implementação de testes unitários para garantir a robustez do código.\n- Participação ativa em setups iniciais e tomadas de decisões arquiteturais em projetos como Petdex, Plowly e landing pages(Octopost e Petdex).\n- Contribuição em processos de discovery de design para aprimorar a experiência do usuário.\n- Integração bem-sucedida com a ferramenta de feedback de erros(Sentry) no projeto.\n- Configuração e otimização de linters(ESLint e Stylelint) para garantir a consistência e qualidade do código fonte.",
    },
    {
      company: "Freelancer",
      link: "",
      badges: ["Remoto"],
      title: "Desenvolvedor Full-Stack",
      logo: NSNLogo,
      start: "2021",
      end: "2023",
      description:
        "Trabalhei como desenvolvedor freelancer e consultor em Teresina-Pi, desenvolvendo novos sistemas, construindo, conectando APIs, reescalonando, refatorando código, implementando novos layouts e funcionalidades para clientes.",
    },
  ],
  skills: [
    "Ingês(B1)",
    "JavaScript",
    "React",
    "Git",
    "GitHub",
    "Figma",
    "RadixUI",
    "Node",
    "Python",
    "Go",
    "Linux",
    "Git",
    "Figma",
    "Next",
    "TailwindCss",
    "StyledComponents",
    "Sass",
    "TypeScript",
  ],
  projects: [
    {
      title: "Octopost",
      techStack: [
        "DevHat",
        "TypeScript",
        "Electron",
        "Vite",
        "Sass",
        "Vitest",
        "NodeJs",
        "I18n",
        "Framer Motion",
        "Sentry",
        "Playwright",
        "Husky",
        "Postcss",
        "Stylelint",
        "Zustand",
      ],
      description:
        "OctoPost é um aplicativo de redes sociais único que permite aos usuários fazerem publicações em várias plataformas de mídia social, tudo dentro de uma única interface unificada",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://github.com/devhatt/octopost",
      },
    },
    {
      title: "PetDex",
      techStack: [
        "DevHat",
        "Go",
        "Swagger",
        "Prisma",
        "Postegress",
        "Docker",
        "Testify",
      ],
      description:
        "PetDex, o aplicativo que transforma a experiência de ser tutor de pets em algo único e interativo. Com o PetDex, os tutores podem catalogar e compartilhar informações sobre seus pets, semelhante à famosa Pokedex, mas para animais de estimação.",
      logo: ConsultlyLogo,
      link: {
        label: "petdex.com",
        href: "https://github.com/devhatt/pet-dex-backend",
      },
    },
    {
      title: "RocketMovies",
      techStack: [
        "Side Project",
        "React",
        "ReactRouter",
        "Vite",
        "StyledComponents",
        "ReactIcons",
      ],
      description:
        "Front-End de uma aplicação de registro de filmes, onde é possível categorizar os filmes e adicionar os mesmos.",
      logo: ConsultlyLogo,
      link: {
        label: "rocket-movies.com",
        href: "https://rocket-movies.piluvitu.dev/",
      },
    },
    {
      title: "ToDo List",
      techStack: [
        "TypeScript",
        "React",
        "Vite",
        "EsLint",
        "NanoID",
        "Readix UI",
        "CSS Modules",
      ],
      description:
        "Aplicação ToDo list usada para poder melhorar sua organização no dia.",
      logo: ConsultlyLogo,
      link: {
        label: "todo.com",
        href: "https://todo.piluvitu.dev/",
      },
    },
    {
      title: "DinoRunner",
      techStack: ["SideProjects", "Python", "PyGame", "Git"],
      description: "Replica do dino runner em python com pygame",
      logo: ConsultlyLogo,
      link: {
        label: "dinorunner.com",
        href: "https://github.com/PiluVitu/BR-2.2023-M2.T1-PauloVictorTSilva",
      },
    },
  ],
} as const;
