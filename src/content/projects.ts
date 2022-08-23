import { BrowserIcon, CodeLibIcon, CommandLineIcon, ComputerScreenIcon, NodeLogo, PackageIcon, ReactLogo, SmartphoneScreenIcon, TailwindCSSLogo, TypescriptLogo } from "../lib/icons";

export const projects = [
  {
    title: 'ZNotes',
    description: 'A cross-platform note-taking app ',
    dependencies: [
      {
        title: 'Typescript',
        Icon: TypescriptLogo
      },
      {
        title:'React JS',
        Icon: ReactLogo
      },
      {
        title: 'NodeJS',
        Icon: NodeLogo
      },
      {
        title:'MD Parser',
        Icon: PackageIcon
      }
    ],
    screens: [
      {
        title:'Browser',
        Icon: BrowserIcon
      },
      {
        title:'Desktop',
        Icon: ComputerScreenIcon
      },
      {
        title:'Mobile',
        Icon: SmartphoneScreenIcon
      },
      // {
      //   title:'CLI',
      //   Icon: CommandLineIcon
      // },
      // {
      //   title:'Library',
      //   Icon: CodeLibIcon
      // }
    ],
    links: {
      github: '',
      demo: '',
      details: ''
    }
  },
  {
    title: 'Sudoku',
    description: 'A very interactive Sudoku game. ',
    dependencies: [
      {
        title: 'Typescript',
        Icon: TypescriptLogo
      },
      {
        title:'React JS',
        Icon: ReactLogo
      }
    ],
    screens: [
      {
        title:'Browser',
        Icon: BrowserIcon
      }
    ],
    links: {
      github: '',
      demo: '',
      details: ''
    }
  },
  {
    title: 'My portfolio',
    description: 'Made to impress so forgive me if feels overpopulated with interactivity.',
    dependencies: [
      {
        title: 'Typescript',
        Icon: TypescriptLogo
      },
      {
        title:'React JS',
        Icon: ReactLogo
      },
      {
        title: 'NodeJS',
        Icon: NodeLogo
      },
      {
        title: 'Tailwind CSS',
        Icon: TailwindCSSLogo
      },
      {
        title:'Email Sender',
        Icon: PackageIcon
      }
    ],
    screens: [
      {
        title:'Desktop',
        Icon: ComputerScreenIcon
      },
      {
        title:'Browser',
        Icon: BrowserIcon
      },
      {
        title:'Mobile',
        Icon: SmartphoneScreenIcon
      },
      // {
      //   title:'CLI',
      //   Icon: CommandLineIcon
      // },
      // {
      //   title:'Library',
      //   Icon: CodeLibIcon
      // }
    ],
    links: {
      github: '',
      demo: '',
      details: ''
    }
  },
  {
    title: 'Miles',
    description: 'CLI tool for webhacking. It takes urls and create wordlist for bruteforcing directories in a certain domain.',
    dependencies: [
      {
        title: 'NodeJS',
        Icon: NodeLogo
      }
    ],
    screens: [
      {
        title:'Command Line',
        Icon: CommandLineIcon
      }
    ],
    links: {
      github: '',
      demo: '',
      details: ''
    }
  }
];

export const minorProjects = [
  {
    title: 'Sudoku board generator',
    description: 'Generates a perfect sudoku board.',
    links: {
      github: '',
      npm: ''
    }
  },
  {
    title: 'Markdown Parser',
    description: 'Generates a markdown of html.',
    links: {
      github: '',
      npm: ''
    }
  },
  {
    title: 'Bring/Send',
    description: 'Utility tool for wsl users to easily bring and send files between windows and wsl.',
    links: {
      github: '',
      npm: ''
    }
  }
]

//skills activated in the fundamentals with close button e click in the sele...
//interactable things around the app - skyrim fork feeling