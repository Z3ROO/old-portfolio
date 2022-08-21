import { useState } from "react";
import { skillsDetails, skillsPresentation } from "../content/skills";
import { BurpLogo, DesignThinkingIcon, DevelopmentIcon, HackerIcon, OwaspLogo, WebProtectionIcon } from "../lib/icons";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

function ContainerTitle({title, Icon}:any) {
  return (
    <div className="mb-8">        
      <Icon className={'w-12 fill-red-400 inline-block'}/>
      <h2 className="align-bottom ml-4 text-4xl font-bold inter-black inline-block">{title}</h2>
    </div>
  )
}


export default function Skills() {
  const [detailsContainer, setDetailsContainer] = useState<any>(null);

  return (
    <section className="">
      <SectionTitle title="Skills" />
      <div className="grid lg:grid-cols-[3fr_5fr] lg:grid-rows-[7fr_5fr] grid-cols-[1fr] grid-rows-[1fr_1fr_1fr] gap-6">
        <Container>
          <ContainerTitle title={skillsPresentation.designThinking.title} Icon={skillsPresentation.designThinking.Icon}/>
          <p className="text-xl p-2">
            {skillsPresentation.designThinking.description}
          </p>
          <p className="text-2xl p-2">Read <a className="cursor-pointer font-bold text-red-400">this post</a> to get a taste.</p>
          {/* #The necessity is the mother of all creations. */}
        </Container>
        <DevelopmentSection />
        <Container className={'relative'}>
          <ContainerTitle title={skillsPresentation.security.title} Icon={skillsPresentation.security.Icon} />
          <p className="text-xl">
            {skillsPresentation.security.description}
          </p>
          {detailsContainer && <div className="testt overflow-hidden">
            {detailsContainer.text}
          </div>}
          <div className="relative z-4 mt-4">
            {
              skillsDetails.security.map((skill, index) => (
                <SecuritySectionIcon className="transition-all" style={{transform: detailsContainer?.position === index ? 'scale(1.1)' : ''}} Icon={skill.Icon} details={{text:skill.description, position: index}} setDetailsContainer={setDetailsContainer} />  
              ))
            }
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
        <ContainerTitle title={skillsPresentation.development.title} Icon={skillsPresentation.development.Icon} />
        <p className="text-xl px-2 mb-4">
          {skillsPresentation.development.description}
        </p>
        <SkillList selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
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
          <h2 className="text-3xl font-bold mb-4">{skillsDetails.development[selectedSkill].title}</h2>
          {
            skillsDetails.development[selectedSkill].descrition.map((item) => (
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
  ];

  return (
    <div className="px-2 pr-6 pb-4 relative flex flex-col justify-around flex-grow">
      {
        Array(5).fill(null).map((val, row) => {
          const [start, end, boxClass] = structureConfig[row]
          return (
            <div className={'grid items-center justify-center'} style={{gridTemplateColumns:`repeat(${end-start}, minmax(0, 1fr))`}}>
              {
                skillsDetails.development.map((skill, index) => {
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