import { BurpLogo, OwaspLogo, WebProtectionIcon, HTMLLogo, CSSLogo, JsLogo, ReactLogo, ElectronJSLogo, PostgresLogo, MongoLogo, OSIcon, NetworkIcon, FundamentalsIcon, GraphQlLogo, NextJSLogo, GitLogo, RedisLogo, DockerLogo, JestLogo, GitLabLogo, CachingIcon, LinuxLogo, BashLogo, NPMLogo, WebpackLogo, BabelLogo, PostCSSLogo, TailwindCSSLogo, StyledComponents, ReactRouter, CrytoIcon, OAuthLogo, JWTLogo, VimLogo, PhotoshopLogo, IllustratorLogo, HackerIcon, DevelopmentIcon, DesignThinkingIcon } from "../lib/icons";
import { ITitledIcon } from "./projects";

export interface ISkillPresentation extends ITitledIcon {
  description: string|string[]
}

const designThinkingPresentation: ISkillPresentation = {
  title: 'Design Thinking',
  Icon: DesignThinkingIcon,
  description: `Recently the idea of design thinking is strongly atetched to Product Design and its variants, but it doesnt stop there. It can be aplied to literally anything, from designing your day to designing your future depicting the appropriate decisions to achieve a certain goal, a certain result.
  Of course that happens once you get a deep understanding of the fundamentals and from there it can be applied to anything.`
}

const securityPresentation: ISkillPresentation = {
  title: 'Security',
  Icon: HackerIcon,
  description: `A full year of intesive study of web hacking with takes on bugbounty hunting.A full year of intesive study of web hacking with takes on bugbounty hunting.`
}

const developmentPresentation: ISkillPresentation = {
  title: 'Development',
  Icon: DevelopmentIcon,
  description: `Around 10 years working with IT and Almost 5 of those practicing web development, currently on what some would refer to mid-to-senior level. I'm more confortable with front-end development but slowly shifting to backend with a more low-level programming approach.`
}

const designThinkingDetails = [
  {

  }
]

const securityDetails: ISkillPresentation[] = [
  {
    title:'Burp',
    Icon: BurpLogo,
    description: 'Burp is a proxy tool for send/intercept http request/response. Almost one year using this tool made me fluent in http.'
  },
  {
    title:'Owasp',
    Icon: OwaspLogo,
    description: 'Up to date with the owasp 2017 & 2021 top 10 vulnerabilities e much more not included in the list.'
  },
  {
    title:'Browser Security',
    Icon: WebProtectionIcon,
    description: 'Able to deal, respect and or implement browser security mechanisms like CORS, SOP, CSP etc.'
  }
]

const developmentDetails: ISkillPresentation[] = [
  {
    title: 'Fundamentals',
    Icon: FundamentalsIcon,
    description: [
      'Able to build anything data-intensive related',
      'Strong logical thinking.',
      'Data structures and Algorithms.',
      'Visualize code end-result.'
    ]
  },
  {
    title: 'HTML',
    Icon: HTMLLogo,
    description: [
      'Conventions and best practices.',
      'Semantic structure.',
      'SEO.',
      'Basics of accessibility.'
    ]
  },
  {
    title: 'CSS',
    Icon: CSSLogo,
    description: [
      'Box Model, flexbox, grid.',
      'Responsive design.',
      'Basics of SASS.'
    ]
  },
  {
    title: 'Javascript',
    Icon: JsLogo,
    description: [
      'ES6+',
      'NodeJs core modules and concepts.',
      'Promises, async/await.',
      'Core concepts: CallStack, EventLoop, hoisting, closure etc.',
      'DOM manipulations, fetch.'
    ]
  },
  {
    title: 'ReactJS/Native',
    Icon: ReactLogo,
    description: [
      'Browser/Android/IOS.',
      'Proficient with functional components.',
      'Complete understanding of hooks.',
      'core concepts: Reconciliation algorithm, state update etc.',
      'Overall understanding of class components.'
    ]
  },
  {
    title: 'ElectronJS',
    Icon: ElectronJSLogo,
    description: [
      'Create fully functional desktop apps'
    ]
  },
  {
    title: 'SQL',
    Icon: PostgresLogo,
    description: [
      'PostgreSQL',
      'Complex CRUD operations',
      'Transations',
      'Migrations and migration tecniques',
      'CLI: psql, ...'
    ]
  },
  {
    title: 'No-SQL',
    Icon: MongoLogo,
    description: [
      'Complex CRUD operations',
      'Transations',
      'Migrations and migration tecniques',
      'able to use mongoose if necessary'
    ]
  },
  {
    title: 'O.S',
    Icon: OSIcon,
    description: [
      'Threds and process.',
      'Concurrency, parallelism etc.'
    ]
  },
  {
    title: 'Network fundamentals',
    Icon: NetworkIcon,
    description: [
      '5 layer network model.',
      'TCP/IP.',
      'HTTP',
      'DNS'
    ]
  },
  {
    title: 'GraphQL',
    Icon: GraphQlLogo,
    description: [
      'Queries and mutations',
      'able to use Apollo client if necessary'
    ]
  },
  {
    title: 'NextJS',
    Icon: NextJSLogo,
    description: [
      'SSG and SSR'
    ]
  },
  {
    title: 'Git',
    Icon: GitLogo,
    description: [
      'Git flow'
    ]
  },
  {
    title: 'Redis',
    Icon: RedisLogo,
    description: []
  },
  {
    title: 'Docker',
    Icon: DockerLogo,
    description: []
  },
  {
    title: 'Jest',
    Icon: JestLogo,
    description: [
      'Back-end unit test'
    ]
  },
  {
    title: 'GitLab',
    Icon: GitLabLogo,
    description: []
  },
  {
    title: 'Caching',
    Icon: CachingIcon,
    description: []
  },
  {
    title: 'Linux/WSL',
    Icon: LinuxLogo,
    description: [
      'Debian based distros',
      'Most commom tools/cmds: find, sed, awk, grep, curl, wget.'
    ]
  },
  {
    title: 'Bash',
    Icon: BashLogo,
    description: [
      'Broad understanding and practice bash as a language. '
    ]
  },
  {
    title: 'npm',
    Icon: NPMLogo,
    description: [
      'NPM scripts.'
    ]
  },
  {
    title: 'Webpack',
    Icon: WebpackLogo,
    description: []
  },
  {
    title: 'Babel',
    Icon: BabelLogo,
    description: []
  },
  {
    title: 'PostCSS',
    Icon: PostCSSLogo,
    description: []
  },
  {
    title: 'Tailwind',
    Icon: TailwindCSSLogo,
    description: []
  },
  {
    title: 'Styled Components',
    Icon: StyledComponents,
    description: []
  },
  {
    title: 'React Router',
    Icon: ReactRouter,
    description: []
  },
  {
    title: 'Cryptography',
    Icon: CrytoIcon,
    description: []
  },
  {
    title: 'OAuth',
    Icon: OAuthLogo,
    description: []
  },
  {
    title: 'JWT',
    Icon: JWTLogo,
    description: []
  },
  {
    title: 'Vim',
    Icon: VimLogo,
    description: [
      'Vim can be something very usefull when some atipical editing directly in the server must happen.',
      'Most common vim commands.'
    ]
  },
  {
    title: 'Photoshop',
    Icon: PhotoshopLogo,
    description: [
      'Complete confortable with the software.',
      'Intermediary image manipulations.'
    ]
  },
  {
    title: 'Illustrator',
    Icon: IllustratorLogo,
    description: [
      'Complete confortable with the software.',
      'Intermediary vector skills.'
    ]
  }
];

export const skillsPresentation = {
  designThinking: designThinkingPresentation,
  development: developmentPresentation,
  security: securityPresentation,
}

export const skillsDetails = {
  designThinking: designThinkingDetails,
  development: developmentDetails,
  security: securityDetails,
}