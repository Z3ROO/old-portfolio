import { BurpLogo, OwaspLogo, WebProtectionIcon, HTMLLogo, CSSLogo, JsLogo, ReactLogo, ElectronJSLogo, PostgresLogo, MongoLogo, OSIcon, NetworkIcon, FundamentalsIcon, GraphQlLogo, NextJSLogo, GitLogo, RedisLogo, DockerLogo, JestLogo, GitLabLogo, LinuxLogo, BashLogo, NPMLogo, WebpackLogo, BabelLogo, PostCSSLogo, TailwindCSSLogo, StyledComponents, ReactRouter, CrytoIcon, OAuthLogo, JWTLogo, VimLogo, PhotoshopLogo, IllustratorLogo, HackerIcon, DevelopmentIcon, DesignThinkingIcon, SEOIcon, DatabaseIcon, DesignIcon, CICDIcon } from "../lib/icons";
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
  },
  {
    title: 'Cryptography',
    Icon: CrytoIcon,
    description: ''
  },
  {
    title: 'oAuth',
    Icon: OAuthLogo,
    description: ''
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
      'Able to build anything data-intensive related',
      'Strong logical thinking.',
      'Data structures and Algorithms.',
      'Visualize code end-result.'
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
      'Box Model, flexbox, grid.',
      'Responsive design.',
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
      'ES6+',
      'NodeJs core modules and concepts.',
      'Promises, async/await.',
      'Core concepts: CallStack, EventLoop, hoisting, closure etc.',
      'DOM manipulations, fetch.'
    ],
    innerIcons: [
      {
        title: 'NPM',
        Icon: NPMLogo
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
      'Browser/Android/IOS.',
      'Proficient with functional components.',
      'Complete understanding of hooks.',
      'core concepts: Reconciliation algorithm, state update etc.',
      'Overall understanding of class components.'
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
      'Graph based retrieval with graphQL'
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
      'Threds and process.',
      'Concurrency, parallelism etc.'
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
      'HTTP',
      'DNS'
    ],
    innerIcons: [

    ]
  },
  {
    title: 'Linux/WSL',
    Icon: LinuxLogo,
    description: [
      'Debian based distros',
      'Most commom tools/cmds: find, sed, awk, grep, curl, wget.'
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
      'Photoshop',
      'Illustrator',
      'Color theory',
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