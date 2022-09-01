import { useState } from "react";
import { skillsDetails, skillsPresentation } from "../content/skills";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function Skills() {

  return (
    <section className="">
      <SectionTitle title="Skills" />
      <div className={`
        grid grid-cols-[1fr] grid-rows-[1fr_1fr_1fr] gap-6
        lg:grid-cols-[3fr_5fr] lg:grid-rows-[7fr_5fr]
      `}>
        <DesignThinkingSection />
        <DevelopmentSection />
        <SecuritySection />
      </div>
    </section>
  )
}

function DesignThinkingSection() {
  return (
    <Container>
      <SkillContainerTitle title={skillsPresentation.designThinking.title} Icon={skillsPresentation.designThinking.Icon}/>
      <p className="text-xl p-2">
        {skillsPresentation.designThinking.description}
      </p>
      <p className="text-2xl p-2">
        Read <a className="cursor-pointer font-bold text-red-400" href="/">this post</a> to get a taste.
      </p>
      {/* #The necessity is the mother of all creations. */}
    </Container>
  )
}

function DevelopmentSection() {
  const [selectedSkill, setSelectedSkill] = useState<number|null>(null);
  return (
    <Container className="row-span-2 flex flex-col xl:flex-col 2xl:flex-row">
      <div className="flex flex-col">
        <SkillContainerTitle title={skillsPresentation.development.title} Icon={skillsPresentation.development.Icon} />
        <p className="text-xl px-2 mb-4">
          {skillsPresentation.development.description}
        </p>
        <SkillList selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
      </div>
      <DevelopmentSectionDetailBox selectedSkill={selectedSkill}/>
    </Container>
  )
}

function SkillList({selectedSkill, setSelectedSkill}:any) {
  const skillIconClassName = 'fill-red-400 inline-block opacity-75 hover:scale-110 transition-all hover:opacity-100'
  const structureConfig:[number, number, string][] = [
    [0,5, "w-16 m-3 "+skillIconClassName],
    [5,11, "w-14 m-3 "+skillIconClassName],
    [12,20, "w-12 m-2 "+skillIconClassName],
    [20,30, "w-10 m-2 "+skillIconClassName],
    [30,42, "w-8 m-2 "+skillIconClassName]
  ];

  return (
    <div className="px-2 pr-6 pb-4 relative flex flex-col justify-around flex-grow">
      {
        Array(5).fill(null).map((val, row) => {
          const [start, end, boxClass] = structureConfig[row];
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

function DevelopmentSectionDetailBox({selectedSkill}:any) {
  if (selectedSkill == null)
    return (
      <div className="flex justify-center items-center dark:bg-gray-650 bg-gray-300 2xl:w-96 w-full rounded-lg shrink-0 2xl:h-full h-[calc(100%-26rem)] border border-2 border-dashed border-gray-400 shadow-inner shadow-[#0006]">
        <span className="inline-block text-center text-2xl select-none opacity-60">
          Click in one of the icons
          <br />
          <span className="text-7xl">&#11013;</span>
        </span>
      </div>
    );

  return (
    <Container className="2xl:w-96 w-full shrink-0 2xl:h-full h-[calc(100%-26rem)]">
      <h2 className="text-3xl font-bold mb-4">{skillsDetails.development[selectedSkill].title}</h2>
      {
        skillsDetails.development[selectedSkill].descrition.map((item) => (
          <p className="m-2">&#8857; {item}.</p>
        ))
      }
    </Container>
  )
}

function SecuritySection() {  
  const [detailsContainer, setDetailsContainer] = useState<any>(null);

  return (
    <Container className={'relative'}>
        <SkillContainerTitle title={skillsPresentation.security.title} Icon={skillsPresentation.security.Icon} />
        <p className="text-xl">
          {skillsPresentation.security.description}
        </p>
        {detailsContainer && <div className="testt overflow-hidden">
          <h2 className="text-2xl font-bold mb-2 ml-2">{detailsContainer.title}</h2>
          {detailsContainer.description}
        </div>}
        <div className="relative z-4 mt-4">
          {
            skillsDetails.security.map((skill, index) => (
              <SecuritySectionIcon className="transition-all" style={{transform: detailsContainer?.position === index ? 'scale(1.1)' : ''}} Icon={skill.Icon} details={{...skill, position: index}} setDetailsContainer={setDetailsContainer} />  
            ))
          }
        </div>
      </Container>
  )
}

function SecuritySectionIcon({Icon, children, className, style, details, setDetailsContainer}:any) {
  return (
    <div className={"inline-block p-2 "+className} onMouseEnter={() => setDetailsContainer(details)} onMouseLeave={() => setDetailsContainer(null)} style={style}>
      <Icon className={'w-10 fill-red-400 inline-block'} />
    </div>
  )
}


function SkillContainerTitle({title, Icon}:any) {
  return (
    <div className="mb-8">        
      <Icon className={'w-12 fill-red-400 inline-block'}/>
      <h2 className="align-bottom ml-4 text-4xl font-bold inter-black inline-block">{title}</h2>
    </div>
  )
}