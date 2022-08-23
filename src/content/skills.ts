import { BurpLogo, OwaspLogo, WebProtectionIcon, HTMLLogo, CSSLogo, JsLogo, ReactLogo, ElectronJSLogo, PostgresLogo, MongoLogo, OSIcon, NetworkIcon, FundamentalsIcon, GraphQlLogo, NextJSLogo, GitLogo, RedisLogo, DockerLogo, JestLogo, GitLabLogo, CachingIcon, LinuxLogo, BashLogo, NPMLogo, WebpackLogo, BabelLogo, PostCSSLogo, TailwindCSSLogo, StyledComponents, ReactRouter, CrytoIcon, OAuthLogo, JWTLogo, VimLogo, PhotoshopLogo, IllustratorLogo, HackerIcon, DevelopmentIcon, DesignThinkingIcon } from "../lib/icons";


const designThinkingPresentation = {
  title: 'Design Thinking',
  Icon: DesignThinkingIcon,
  description: `Recently the idea of design thinking is strongly atetched to Product Design and its variants, but it doesnt stop there. It can be aplied to literally anything, from designing your day to designing your future depicting the appropriate decisions to achieve a certain goal, a certain result.
  Of course that happens once you get a deep understanding of the fundamentals and from there it can be applied to anything.`
}

const securityPresentation = {
  title: 'Security',
  Icon: HackerIcon,
  description: `A full year of intesive study of web hacking with takes on bugbounty hunting.A full year of intesive study of web hacking with takes on bugbounty hunting.`
}

const developmentPresentation = {
  title: 'Development',
  Icon: DevelopmentIcon,
  description: `Around 10 years working with IT and Almost 5 of those practicing web development, currently on what some would refer to mid-to-senior level. I'm more confortable with front-end development but slowly shifting to backend with a more low-level programming approach.`
}

const designThinkingDetails = [
  {

  }
]

const securityDetails = [
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

const developmentDetails = [
  {
    title: 'Fundamentals',
    Icon: FundamentalsIcon,
    descrition: [
      'Able to build anything data-intensive related',
      'Strong logical thinking.',
      'Data structures and Algorithms.',
      'Visualize code end-result.'
    ]
  },
  {
    title: 'HTML',
    Icon: HTMLLogo,
    descrition: [
      'Conventions and best practices.',
      'Semantic structure.',
      'SEO.',
      'Basics of accessibility.'
    ]
  },
  {
    title: 'CSS',
    Icon: CSSLogo,
    descrition: [
      'Box Model, flexbox, grid.',
      'Responsive design.',
      'Basics of SASS.'
    ]
  },
  {
    title: 'Javascript',
    Icon: JsLogo,
    descrition: [
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
    descrition: [
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
    descrition: [
      'Create fully functional desktop apps'
    ]
  },
  {
    title: 'SQL',
    Icon: PostgresLogo,
    descrition: [
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
    descrition: [
      'Complex CRUD operations',
      'Transations',
      'Migrations and migration tecniques',
      'able to use mongoose if necessary'
    ]
  },
  {
    title: 'O.S',
    Icon: OSIcon,
    descrition: [
      'Threds and process.',
      'Concurrency, parallelism etc.'
    ]
  },
  {
    title: 'Network fundamentals',
    Icon: NetworkIcon,
    descrition: [
      '5 layer network model.',
      'TCP/IP.',
      'HTTP',
      'DNS'
    ]
  },
  {
    title: 'GraphQL',
    Icon: GraphQlLogo,
    descrition: [
      'Queries and mutations',
      'able to use Apollo client if necessary'
    ]
  },
  {
    title: 'NextJS',
    Icon: NextJSLogo,
    descrition: [
      'SSG and SSR'
    ]
  },
  {
    title: 'Git',
    Icon: GitLogo,
    descrition: [
      'Git flow'
    ]
  },
  {
    title: 'Redis',
    Icon: RedisLogo,
    descrition: []
  },
  {
    title: 'Docker',
    Icon: DockerLogo,
    descrition: []
  },
  {
    title: 'Jest',
    Icon: JestLogo,
    descrition: [
      'Back-end unit test'
    ]
  },
  {
    title: 'GitLab',
    Icon: GitLabLogo,
    descrition: []
  },
  {
    title: 'Caching',
    Icon: CachingIcon,
    descrition: []
  },
  {
    title: 'Linux/WSL',
    Icon: LinuxLogo,
    descrition: [
      'Debian based distros',
      'Most commom tools/cmds: find, sed, awk, grep, curl, wget.'
    ]
  },
  {
    title: 'Bash',
    Icon: BashLogo,
    descrition: [
      'Broad understanding and practice bash as a language. '
    ]
  },
  {
    title: 'npm',
    Icon: NPMLogo,
    descrition: [
      'NPM scripts.'
    ]
  },
  {
    title: 'Webpack',
    Icon: WebpackLogo,
    descrition: []
  },
  {
    title: 'Babel',
    Icon: BabelLogo,
    descrition: []
  },
  {
    title: 'PostCSS',
    Icon: PostCSSLogo,
    descrition: []
  },
  {
    title: 'Tailwind',
    Icon: TailwindCSSLogo,
    descrition: []
  },
  {
    title: 'Styled Components',
    Icon: StyledComponents,
    descrition: []
  },
  {
    title: 'React Router',
    Icon: ReactRouter,
    descrition: []
  },
  {
    title: 'Cryptography',
    Icon: CrytoIcon,
    descrition: []
  },
  {
    title: 'OAuth',
    Icon: OAuthLogo,
    descrition: []
  },
  {
    title: 'JWT',
    Icon: JWTLogo,
    descrition: []
  },
  {
    title: 'Vim',
    Icon: VimLogo,
    descrition: [
      'Vim can be something very usefull when some atipical editing directly in the server must happen.',
      'Most common vim commands.'
    ]
  },
  {
    title: 'Photoshop',
    Icon: PhotoshopLogo,
    descrition: [
      'Complete confortable with the software.',
      'Intermediary image manipulations.'
    ]
  },
  {
    title: 'Illustrator',
    Icon: IllustratorLogo,
    descrition: [
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