import { useState } from "react";
import { BabelLogo, BashLogo, BurpLogo, CachingIcon, CrytoIcon, CSSLogo, DesignThinkingIcon, DevelopmentIcon, DockerLogo, ElectronJSLogo, GitLabLogo, GitLogo, GraphQlLogo, HackerIcon, HTMLLogo, IllustratorLogo, JestLogo, JsLogo, JWTLogo, LinuxLogo, LoadBalancer, MongoLogo, NetworkIcon, NextJSLogo, NodeLogo, NPMLogo, OAuthLogo, OSIcon, OwaspLogo, PhotoshopLogo, PostCSSLogo, PostgresLogo, ReactLogo, ReactRouter, RedisLogo, FundamentalsIcon, StyledComponents, TailwindCSSLogo, VimLogo, WebpackLogo, WebProtectionIcon } from "../lib/icons";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

const bigIcon = 'w-16 fill-red-400 m-3 inline-block opacity-75 hover:scale-110 transition-all hover:opacity-100';

const mdIcon = 'w-12 fill-red-400 m-3 inline-block opacity-75 hover:scale-110 transition-all hover:opacity-100';
const smallIcon = 'w-8 fill-red-400 m-3 inline-block opacity-75 hover:scale-110 transition-all hover:opacity-100';
const titleIcon = 'w-12 fill-red-400 inline-block';

const burpDetails = `s,of web hacking with takee ap`;
const owaspDetails = `asdasdass,adasof weasdasdb hacking wiasdasdasth takee ap`;

const skills = [
  {
    title: 'HTML',
    Icon: HTMLLogo,
    descrition: [
      'Conventions and best practices',
      'Semantic structure',
      'SEO',
      'Basics of accessibility'
    ]
  },
  {
    title: 'CSS',
    Icon: CSSLogo,
    descrition: [
      'Box Model, flexbox, grid.',
      'Responsive design',
      'Basics of SASS'
    ]
  },
  {
    title: 'Javascript',
    Icon: JsLogo,
    descrition: [
      'ES6+',
      'Promises, async/await',
      'Core concepts: CallStack, EventLoop, hoisting, closure',
      'DOM manipulations, fetch'
    ]
  },
  {
    title: 'ReactJS/Native',
    Icon: ReactLogo,
    descrition: []
  },
  {
    title: 'ElectronJS',
    Icon: ElectronJSLogo,
    descrition: []
  },
  {
    title: 'SQL',
    Icon: PostgresLogo,
    descrition: []
  },
  {
    title: 'No-SQL',
    Icon: MongoLogo,
    descrition: []
  },
  {
    title: 'O.S',
    Icon: OSIcon,
    descrition: []
  },
  {
    title: 'Network fundamentals',
    Icon: NetworkIcon,
    descrition: []
  },
  {
    title: 'Fundamentals',
    Icon: FundamentalsIcon,
    descrition: []
  },
  {
    title: 'GraphQL',
    Icon: GraphQlLogo,
    descrition: []
  },
  {
    title: 'NextJS',
    Icon: NextJSLogo,
    descrition: []
  },
  {
    title: 'Git',
    Icon: GitLogo,
    descrition: []
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
    descrition: []
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
    descrition: []
  },
  {
    title: 'Bash',
    Icon: BashLogo,
    descrition: []
  },
  {
    title: 'npm',
    Icon: NPMLogo,
    descrition: []
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
    descrition: []
  },
  {
    title: 'Photoshop',
    Icon: PhotoshopLogo,
    descrition: []
  },
  {
    title: 'Illustrator',
    Icon: IllustratorLogo,
    descrition: []
  }
];

function ContainerTitle({title, Icon}:any) {
  return (
    <div className="mb-8">        
      <Icon className={titleIcon}/>
      <h2 className="align-bottom ml-4 text-4xl font-bold inter-black inline-block">{title}</h2>
    </div>
  )
}
//6-9

export default function Skills() {
  const [detailsContainer, setDetailsContainer] = useState<any>(null);

  return (
    <section className="">
      <SectionTitle title="Skills" />
      <div className="grid lg:grid-cols-[3fr_5fr] lg:grid-rows-[7fr_5fr] grid-cols-[1fr] grid-rows-[1fr_1fr_1fr] gap-6">
        <Container>
          <ContainerTitle title="Design Thinking" Icon={DesignThinkingIcon}/>
          <p className="text-xl p-2">
            Recently the idea of design thinking is strongly atetched to Product Design and its variants, but it doesnt stop there. It can be aplied to literally anything, from designing your day to designing your future depicting the appropriate decisions to achieve a certain goal, a certain result.
    Of course that happens once you get a deep understanding of the fundamentals and from there it can be applied to anything.
          </p>
          <p className="text-2xl p-2">Read <a className="cursor-pointer font-bold text-red-400">this post</a> to get a taste.</p>
          {/* #The necessity is the mother of all creations. */}
        </Container>
        <DevelopmentSection />
        <Container className={'relative'}>
          <ContainerTitle title="Security" Icon={HackerIcon} />
          <p className="text-xl">
            A full year of intesive study of web hacking with takes on bugbounty hunting.A full year of intesive study of web hacking with takes on bugbounty hunting.
          </p>
          {detailsContainer && <div className="testt overflow-hidden">
            {detailsContainer.text}
          </div>}
          
          {/* {detailsContainer && <div 
            className={`absolute mt-4 w-[3.5rem] h-[3.5rem] bg-gray-250 z-3 rounded-b-md transition-all shadow-md shadow-[#0004]`} 
            style={{
              left: (detailsContainer.position * 3.5 + 1.5) +'rem'
              }}>
            </div>} */}
          <div className="relative z-4 mt-4">
            <SecuritySectionIcon className="transition-all" style={{transform: detailsContainer?.position === 0 ? 'scale(1.1)' : ''}} Icon={BurpLogo} details={{text:burpDetails,position: 0}} setDetailsContainer={setDetailsContainer} />
            <SecuritySectionIcon className="transition-all" style={{transform: detailsContainer?.position === 1 ? 'scale(1.1)' : ''}} Icon={OwaspLogo} details={{text:owaspDetails,position: 1}} setDetailsContainer={setDetailsContainer} />
            <SecuritySectionIcon className="transition-all" style={{transform: detailsContainer?.position === 2 ? 'scale(1.1)' : ''}} Icon={WebProtectionIcon} details={{text:owaspDetails,position: 2}} setDetailsContainer={setDetailsContainer} />
          </div>
        </Container>
      </div>
    </section>
  )
}

function DevelopmentSection() {
  const [selectedSkill, setSelectedSkill] = useState<number|null>(null);
  return (
    <Container className="row-span-2 flex flex-col xl:flex-col 2xl:flex-row">
      <div className="flex flex-col">
        <ContainerTitle title="Development" Icon={DevelopmentIcon} />
        <p className="text-xl px-2 mb-4">
          Around 10 years working with IT and Almost 5 of those practicing web development, currently on what some would refer to mid-to-senior level. I'm more confortable with front-end development but slowly shifting to backend with a more low-level programming approach.
        </p>
        <SkillList selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
        {/* <div className="pr-4 relative flex flex-col justify-around flex-grow">
          <div className="flex flex-wrap justify-between">
            {
              skills.map((skill, index) => {
                if (index > 11)
                  return
                if (selectedSkill === index)
                  return (
                    <Container level={2} noPad>
                      <skill.Icon className={bigIcon} onClick={() => setSelectedSkill(null)}/>
                    </Container>
                  )
                return <skill.Icon className={bigIcon} onClick={() => setSelectedSkill(index)}/>
              })
            }
          </div>
          <div className="flex flex-wrap justify-between">
            {
              skills.map((skill, index) => {
                if (index <= 11 || index > 19)
                  return
                if (selectedSkill === index)
                  return (
                    <Container level={2} noPad>
                      <skill.Icon className={mdIcon} onClick={() => setSelectedSkill(null)}/>
                    </Container>
                  )
                return <skill.Icon className={mdIcon} onClick={() => setSelectedSkill(index)}/>
              })
            }
          </div>
          <div className="flex flex-wrap justify-between">
            {
              skills.map((skill, index) => {
                if (index <= 19)
                  return
                if (selectedSkill === index)
                  return (
                    <Container level={2} noPad>
                      <skill.Icon className={smallIcon} onClick={() => setSelectedSkill(null)}/>
                    </Container>
                  )
                return <skill.Icon className={smallIcon} onClick={() => setSelectedSkill(index)}/>
              })
            }
            <div className="flex-grow"></div>
          </div>
        </div> */}
      </div>
      {
        selectedSkill == null ? 
        <div className="flex justify-center items-center dark:bg-gray-650 bg-gray-300 2xl:w-96 w-full rounded-lg shrink-0 2xl:h-full h-[calc(100%-26rem)] border border-2 border-dashed border-gray-400 shadow-inner shadow-[#0006]">
          <span className="inline-block text-center text-2xl select-none opacity-60">
            Click in one of the icons
            <br />
            <span className="text-7xl">&#11013;</span>
          </span>
        </div> :
        <Container className="2xl:w-96 w-full shrink-0 2xl:h-full h-[calc(100%-26rem)]">
          <h2 className="text-3xl font-bold mb-4">{skills[selectedSkill].title}</h2>
          {
            skills[selectedSkill].descrition.map((item) => (
              <p className="m-2">&#8857; {item}.</p>
            ))
          }
        </Container>
      }
    </Container>
  )
}

function SkillList({selectedSkill, setSelectedSkill}:any) {
  const structureConfig:[number, number, string][] = [
    [0,5, "w-16 fill-red-400 m-3 inline-block opacity-75 hover:scale-110 transition-all hover:opacity-100"],
    [5,11, "w-14 fill-red-400 m-3 inline-block opacity-75 hover:scale-110 transition-all hover:opacity-100"],
    [12,20, "w-12 fill-red-400 m-2 inline-block opacity-75 hover:scale-110 transition-all hover:opacity-100"],
    [20,30, "w-10 fill-red-400 m-2 inline-block opacity-75 hover:scale-110 transition-all hover:opacity-100"],
    [30,42, "w-8 fill-red-400 m-2 inline-block opacity-75 hover:scale-110 transition-all hover:opacity-100"]
  ]

  return (
    <div className="px-2 pr-6 pb-4 relative flex flex-col justify-around flex-grow">
      {
        Array(5).fill(null).map((val, row) => {
          const [start, end, boxClass] = structureConfig[row]
          return (
            <div className={'grid items-center justify-center'} style={{gridTemplateColumns:`repeat(${end-start}, minmax(0, 1fr))`}}>
              {
                skills.map((skill, index) => {
                  if (index >= start && index < end) {
                    if (selectedSkill === index) {
                      return (
                        <button className="flex justify-center">
                          <Container level={2} noPad>
                            <skill.Icon className={boxClass} style={{opacity:1, transform:'scale(1.1)'}} onClick={() => setSelectedSkill(null)}/>
                          </Container>
                        </button>
                      )
                    }
                    else
                      return (
                        <button className="flex justify-center">
                          <skill.Icon className={boxClass} onClick={() => setSelectedSkill(index)}/>
                        </button>
                      )
                  }
                  else
                    return null
                })
              }
            </div>
          )
        }
      )
      }
    </div>
  )
}

function SecuritySectionIcon({Icon, children, className, style, details, setDetailsContainer}:any) {
  return (
    <div className={"inline-block p-2 "+className} onMouseEnter={() => setDetailsContainer(details)} onMouseLeave={() => setDetailsContainer(null)} style={style}>
      <Icon className={'w-10 fill-red-400 inline-block'} />
    </div>
  )
}