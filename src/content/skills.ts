import { BurpLogo, OwaspLogo, WebProtectionIcon, HTMLLogo, CSSLogo, JsLogo, ReactLogo, ElectronJSLogo, PostgresLogo, MongoLogo, OSIcon, NetworkIcon, FundamentalsIcon, GraphQlLogo, NextJSLogo, GitLogo, RedisLogo, DockerLogo, JestLogo, GitLabLogo, LinuxLogo, BashLogo, NPMLogo, WebpackLogo, BabelLogo, PostCSSLogo, TailwindCSSLogo, StyledComponents, ReactRouter, CrytoIcon, OAuthLogo, JWTLogo, VimLogo, PhotoshopLogo, IllustratorLogo, HackerIcon, DevelopmentIcon, DesignThinkingIcon, SEOIcon, DatabaseIcon, DesignIcon, CICDIcon, NodeLogo } from "../lib/icons";
import { ITitledIcon } from "./projects";

export interface ISkillPresentation extends ITitledIcon {
  description: string|string[]
  innerIcons?: ITitledIcon[]
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
    description: `
      Burp is a proxy tool for send/intercept http request/response. 
      Almost one year using this tool made me fluent in http.
    `
  },
  {
    title:'Owasp',
    Icon: OwaspLogo,
    description: `
      Up to date with the owasp 2017 & 2021 top 10 vulnerabilities and others not included in the list.
    `
  },
  {
    title:'Browser Security',
    Icon: WebProtectionIcon,
    description: `
      Able to deal, respect and or implement browser security mechanisms like CORS, SOP, CSP etc.
    `
  },
  {
    title: 'Cryptography',
    Icon: CrytoIcon,
    description: `
      MD5 and SHA family Hashing, Diffie Hellman key exchange. Basics of cryptography in general.
    `
  },
  {
    title: 'oAuth',
    Icon: OAuthLogo,
    description: `
      Most common threat vectors of oAuth
    `
  },
  {
    title: 'JWT',
    Icon: JWTLogo,
    description: ''
  }
]

const developmentDetails: ISkillPresentation[] = [
  {
    title: 'Fundamentals',
    Icon: FundamentalsIcon,
    description: [
      `Able to build any kind of system front to back.`,
      'Strong logical thinking.',
      'Data structures and Algorithms.',
      'Design patterns',
      'Clean code with good principles',
      'SoP, ports N adapters.',
      'Common git workflow with best practices.',
      'Containerization with Docker'
    ],
    innerIcons: [
      {
        Icon: GitLogo,
        title: 'Git'
      },
      {
        title: 'Docker',
        Icon: DockerLogo
      }
    ]
  },
  {
    title: 'HTML',
    Icon: HTMLLogo,
    description: [
      'Conventions and best practices.',
      'Semantic structure.',
      'SEO.',
      'Intermediary Canvas manipulation.',
      'Basics of accessibility.'
    ],
    innerIcons: [
      {
        title: 'SEO',
        Icon: SEOIcon
      }
    ]
  },
  {
    title: 'CSS',
    Icon: CSSLogo,
    description: [
      'Box Model, flexbox, grid, transform, transition etc.',
      'Responsive design.',
      'Tailwind',
      'Styled Components',
      'Compilation with PostCSS',
      'Basics of SASS.'
    ],
    innerIcons: [
      {
        title: 'Tailwind CSS',
        Icon: TailwindCSSLogo
      },
      {
        title: 'Styled Components',
        Icon: StyledComponents
      },
      {
        title: 'PostCSS',
        Icon: PostCSSLogo
      }
    ]
  },
  {
    title: 'Javascript',
    Icon: JsLogo,
    description: [
      'ES6+ code structure, built in methods and operators',
      'Core concepts: CallStack, EventLoop, hoisting, closure etc.',
      'DOM manipulations, fetch.',
      'Promises, async/await.',
      'SSG/SSR using NextJS',
      'Babel and Webpack core concepts and usage',
      'Node: libuv event loop',
      'Node: core modules fs, os, http, streams etc.',
      'Node: events, streams, clustering etc.'
    ],
    innerIcons: [
      {
        title: 'NPM',
        Icon: NPMLogo
      },
      {
        title: 'NodeJS',
        Icon: NodeLogo
      },
      {
        title: 'Babel',
        Icon: BabelLogo
      },
      {
        title: 'Webpack',
        Icon: WebpackLogo
      },
      {
        title: 'NextJS',
        Icon: NextJSLogo
      }
    ]
  },
  {
    title: 'ReactJS/Native',
    Icon: ReactLogo,
    description: [
      'Browser/Android/IOS and Desktop with ElectronJS.',
      'Proficient with functional components.',
      'Built in and custom hooks.',
      'Reconciliation algorithm, state update etc.',
      'State management with custom hooks and context API.',
      'Overall understanding of class components.',
      'Basics of React Router'
    ],
    innerIcons: [
      {
        title: 'ElectronJS',
        Icon: ElectronJSLogo
      },
      {
        title: 'React Router',
        Icon: ReactRouter
      }
    ]
  },
  {
    title: 'Storage/Retrieval',
    Icon: DatabaseIcon,
    description: [
      'SQL with postgress',
      'NoSQL with MongoDB',
      'Graph based retrieval with graphQL',
      'Memory storage with Redis'
    ],
    innerIcons: [
      {
        title: 'Postgres SQL',
        Icon: PostgresLogo
      },
      {
        title: 'Mongo DB',
        Icon: MongoLogo
      },
      {
        title: 'GraphQL',
        Icon: GraphQlLogo
      },
      {
        title: 'Redis',
        Icon: RedisLogo
      }
    ]
  },
  {
    title: 'O.S',
    Icon: OSIcon,
    description: [
      'POSIX',
      'Threds and process.',
      'Concurrency, parallelism etc.',
      'Memory management',
      'Inter process comunication',
      'I/O management'
    ],
    innerIcons: [

    ]
  },
  {
    title: 'Network fundamentals',
    Icon: NetworkIcon,
    description: [
      '5 layer network model.',
      'TCP/IP.',
      'HTTP.',
      'DNS.'
    ],
    innerIcons: [

    ]
  },
  {
    title: 'Linux/WSL',
    Icon: LinuxLogo,
    description: [
      'Debian based distros',
      `[change]Terminal Commands: grep, awk, sed, lsof, curl, wget
      tail, head, less, find, ssh, kill etc.`,
      'Bash scripting lenguage.',
      'Confortable with Vim.'
    ],
    innerIcons: [
      {
        title: 'Bash',
        Icon: BashLogo
      },
      {
        title: 'Vim',
        Icon: VimLogo
      }
    ]
  },
  {
    title: 'CI/CD',
    Icon: CICDIcon,
    description: [
      'Testing',
      'Pipeline'
    ],
    innerIcons: [
      {
        title: 'Jest',
        Icon: JestLogo
      },
      {
        title: 'GitLab',
        Icon: GitLabLogo
      }
    ]
  },
  {
    title: 'Design',
    Icon: DesignIcon,
    description: [
      'I\'m not a designer but ...',
      'Completely confortable with Photoshop and Illustrator.',
      'Able to use any software never used due to understanding of fundamentals.',
      'Basics of color theory.',
      'Color blind .-.'
    ],
    innerIcons: [
      {
        title: 'Photoshop',
        Icon: PhotoshopLogo
      },
      {
        title: 'Illustrator',
        Icon: IllustratorLogo
      }
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