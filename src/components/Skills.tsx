import React, { useState } from "react";
import { ITitledIcon } from "../content/projects";
import { ISkillPresentation, skillsDetails, skillsPresentation } from "../content/skills";
import useScreenSize from "../lib/hooks/useScreenSize";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function Skills(): JSX.Element {

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

function DesignThinkingSection(): JSX.Element {
  return (
    <Container>
      <SkillContainerTitle title={skillsPresentation.designThinking.title} Icon={skillsPresentation.designThinking.Icon}/>
      <p className="text-lg p-2">
        {skillsPresentation.designThinking.description}
      </p>
      <p className="text-xl p-2">
        Read <a className="cursor-pointer font-bold text-red-400" href="/">this post</a> to get a taste.
      </p>
      {/* #The necessity is the mother of all creations. */}
    </Container>
  )
}

function DevelopmentSection(): JSX.Element {
  const [selectedSkill, setSelectedSkill] = useState<number|null>(null);
  return (
    <Container className="row-span-2 flex flex-col xl:flex-col 2xl:flex-row">
      <div className="flex flex-col">
        <SkillContainerTitle title={skillsPresentation.development.title} Icon={skillsPresentation.development.Icon} />
        <p className="text-lg px-2 mb-4">
          {skillsPresentation.development.description}
        </p>
        <SkillList selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
      </div>
      <DevelopmentSectionDetailBox selectedSkill={selectedSkill}/>
    </Container>
  )
}

type selectedSkillTypes = {
  selectedSkill: number|null
  setSelectedSkill: React.Dispatch<React.SetStateAction<number|null>>
  rowConfig?: [number, number, string]
}

function SkillList({selectedSkill, setSelectedSkill}:selectedSkillTypes): JSX.Element {
  const screenSize = useScreenSize('lg');
  const skillIconClassName = 'fill-red-400 inline-block opacity-75 hover:scale-110 transition-all hover:opacity-100'
  const structureConfig = { 
    fiveRowsStructureConfig : [
      [0,5, "w-16 m-3 "+skillIconClassName],
      [5,11, "w-14 m-3 "+skillIconClassName],
      [12,20, "w-12 m-2 "+skillIconClassName],
      [20,30, "w-10 m-2 "+skillIconClassName],
      [30,42, "w-8 m-2 "+skillIconClassName]
    ],
    fourRowsStructureConfig : [
      [0,6, "w-16 m-3 "+skillIconClassName],
      [6,13, "w-12 m-3 "+skillIconClassName],
      [13,22, "w-9 m-2 "+skillIconClassName],
      [22,36, "w-6 m-2 "+skillIconClassName]
    ]
  }[['xs','sm','md','lg','xl'].includes(screenSize) ? 'fourRowsStructureConfig' : 'fiveRowsStructureConfig'] as [number, number, string][];

  return (
    <div className="px-2 pr-6 pb-4 relative flex flex-col justify-around flex-grow">
      {
        Array(structureConfig.length).fill(null).map((val, row) => {
          const rowConfig = structureConfig[row];
          return (
            <SkillsIconRow {...{ rowConfig, selectedSkill, setSelectedSkill }} />
          )
        })
      }
    </div>
  )
}

function SkillsIconRow({selectedSkill, setSelectedSkill, rowConfig}:selectedSkillTypes): JSX.Element {
  if (rowConfig == null)
    return <>'Something went wrong!'</>

  const [start, end, boxClass] = rowConfig;
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

function DevelopmentSectionDetailBox({ selectedSkill }: { selectedSkill:number|null }): JSX.Element {
  if (selectedSkill == null)
    return (
      <div className="flex justify-center items-center dark:bg-gray-650 bg-gray-300 2xl:w-96 w-full rounded-lg shrink-0 2xl:h-full h-[calc(100%-26rem)] border-2 border-dashed border-gray-400 shadow-inner shadow-[#0006]">
        <span className="inline-block text-center text-2xl select-none opacity-60">
          Click in one of the icons
          <br />
          <span className="text-7xl">&#11013;</span>
        </span>
      </div>
    );
  
  const skillDescription = skillsDetails.development[selectedSkill].description as string[];
  return (
    <Container className="2xl:w-96 w-full shrink-0 2xl:h-full h-[calc(100%-26rem)]">
      <h2 className="text-3xl font-bold mb-4">{skillsDetails.development[selectedSkill].title}</h2>
      {
        skillDescription.map((item) => (
          <p className="m-2">&#8857; {item}.</p>
        ))
      }
    </Container>
  )
}

interface IDetailsContainer extends ISkillPresentation {
  position: number
}

function SecuritySection(): JSX.Element {  
  const [detailsContainer, setDetailsContainer] = useState<IDetailsContainer|null>(null);

  return (
    <Container className={'relative'}>
        <SkillContainerTitle title={skillsPresentation.security.title} Icon={skillsPresentation.security.Icon} />
        <p className="text-lg">
          {skillsPresentation.security.description}
        </p>
        {detailsContainer && <div className="skill-detail-container overflow-hidden">
          <h2 className="text-2xl font-bold mb-2 ml-2">{detailsContainer.title}</h2>
          {detailsContainer.description}
        </div>}
        <div className="relative z-4 mt-4">
          {
            skillsDetails.security.map((skill, index) => (
              <div 
                className={"inline-block p-2 transition-all"} 
                onMouseEnter={() => setDetailsContainer({...skill, position: index})} 
                onMouseLeave={() => setDetailsContainer(null)} 
                style={{transform: detailsContainer?.position === index ? 'scale(1.1)' : ''}}
              >
                <skill.Icon className={'w-10 fill-red-400 inline-block'} />
              </div>
            ))
          }
        </div>
      </Container>
  )
}

function SkillContainerTitle({title, Icon}:ITitledIcon): JSX.Element {
  return (
    <div className="mb-4">        
      <Icon className={'w-10 fill-red-400 inline-block'}/>
      <h2 className="align-bottom ml-4 text-3xl font-bold inter-black inline-block">{title}</h2>
    </div>
  )
}