import React, { useState } from "react";
import { ITitledIcon } from "../../content/projects";
import { ISkillPresentation, skillsDetails, skillsPresentation } from "../../content/skills";
import useOnScroll from "../../lib/hooks/useOnScroll";
import useScreenSize from "../../lib/hooks/useScreenSize";
import Container from "../atomic/Container";
import SectionTitle from "../atomic/SectionTitle";

export default function Skills(): JSX.Element {

  return (
    <section className="">
      <SectionTitle title="Skills" />
      <div className={`
        grid grid-cols-[1fr] grid-rows-[auto-fit_auto-fit_auto-fit] gap-6
        xl:grid-cols-[3fr_5fr] xl:grid-rows-[7fr_5fr]
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
    <Container className="row-span-1">
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
  const screenSize = useScreenSize();

  return (
    <Container className={`
      sm:row-span-2 flex flex-col 
      lg:flex-row 
      xl:flex-col 2xl:flex-row
      `}>
      <div className="flex flex-col">
        <SkillContainerTitle title={skillsPresentation.development.title} Icon={skillsPresentation.development.Icon} />
        <p className="text-lg px-2 mb-4">
          {skillsPresentation.development.description}
        </p>
        <SkillList selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
      </div>
      {
        !['2xs','xs'].includes(screenSize) ?
        <DevelopmentSectionDetailBox selectedSkill={selectedSkill}/> :
        selectedSkill != null && <MobileDevelopmentSectionDetailBox selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill}/>
      }
    </Container>
  )
}

type selectedSkillTypes = {
  selectedSkill: number|null
  setSelectedSkill: React.Dispatch<React.SetStateAction<number|null>>
  rowConfig?: [number, number, string]
}

function SkillList({selectedSkill, setSelectedSkill}:selectedSkillTypes): JSX.Element {
  const screenSize = useScreenSize();
  const skillIconClassName = 'fill-red-400 inline-block opacity-75 hover:scale-110 transition-all hover:opacity-100'
  const structureConfig = { 
    fiveRowsStructureConfig : [
      [0,3, "w-16 m-3 "+skillIconClassName],
      [3,6, "w-16 m-3 "+skillIconClassName],
      [6,9, "w-16 m-3 "+skillIconClassName],
      [9,12, "w-16 m-3 "+skillIconClassName]
    ],
    fourRowsStructureConfig : [
      [0,4, "w-16 m-3 "+skillIconClassName],
      [4,8, "w-16 m-3 "+skillIconClassName],
      [8,12, "w-16 m-3 "+skillIconClassName]
    ]
  }[['sm','md','xl'].includes(screenSize) ? 'fourRowsStructureConfig' : 'fiveRowsStructureConfig'] as [number, number, string][];

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
                    <skill.Icon className={boxClass+' '} style={{opacity:1, transform:'scale(1.1)'}} onClick={() => setSelectedSkill(null)}/>
                  </Container>
                </button>
              )
            }
            else
              return (
                <button className="flex justify-center">
                  <skill.Icon className={boxClass+' '} onClick={() => setSelectedSkill(index)}/>
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
      <div className={`
        flex grow justify-center items-center dark:bg-gray-650 bg-gray-300 rounded-lg shrink-0 
        border-2 border-dashed border-gray-400 shadow-inner shadow-[#0006]
        h-auto w-full
        lg:w-96 lg:h-full
        xl:w-full xl:h-auto
        2xl:w-96 2xl:h-full
      `}>
        <span className="inline-block text-center text-2xl select-none opacity-60 py-10">
          <span className={`
            text-7xl
            lg:hidden xl:inline 2xl:hidden
          `}>&#11014;<br/></span>
          Click in one of the icons
          <br />
          <span className={`
            text-7xl
            hidden
            lg:inline xl:hidden 2xl:inline
          `}>&#11013;</span>
        </span>
      </div>
    );
  
  return (
    <Container className={`
      w-full shrink-0
      h-auto grow max-h-96
      lg:w-96 lg:h-full lg:max-h-[40rem]
      xl:w-full xl:h-auto xl:max-h-96
      2xl:w-96 2xl:h-full 2xl:max-h-[45rem]
    `}>
    <DevelopmentDetailBoxContent selectedSkill={selectedSkill}/>

    </Container>
  )
}

function MobileDevelopmentSectionDetailBox({ selectedSkill, setSelectedSkill }: { selectedSkill:number|null, setSelectedSkill: React.Dispatch<React.SetStateAction<number | null>> }): JSX.Element | null {
  if (selectedSkill == null)
    return null;
  
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useOnScroll((event) => {    
    window.scrollTo(scrollLeft, scrollTop);
  });
  
  return (
    <div onClick={() => setSelectedSkill(null)} className={`
      fixed h-screen w-full top-0 left-0 bg-red-400 text-white dark:bg-gray-700 dark:text-red-400 z-50 px-8 py-12
      `}>
      <DevelopmentDetailBoxContent selectedSkill={selectedSkill}/>
    </div>
  )
}

function DevelopmentDetailBoxContent({selectedSkill}: {selectedSkill: number|null}) {
  if (selectedSkill == null)
    return null;

  const skillDescription = skillsDetails.development[selectedSkill].description as string[];
  return (
    <>
      <h2 className="text-3xl font-bold mb-4">{skillsDetails.development[selectedSkill].title}</h2>
      <div className={`
        flex h-[calc(100%-3rem)]
        flex-col
        sm:flex-row
        lg:flex-col
        xl:flex-row
        2xl:flex-col        
      `}>
        <div className="flex-grow overflow-y-auto overflow-x-hidden">
          {
            skillDescription.map((item) => (
              <p className="m-2">&#8857; {item}.</p>
            ))
          }
        </div>
        <div className={`
          flex flex-wrap self-start shrink-0
          sm:max-w-[8rem] 
          lg:max-w-none
          xl:max-w-[8rem] 
          2xl:max-w-none    
        `}>
          {
            skillsDetails.development[selectedSkill].innerIcons?.map(({title, Icon}) => (
              <div title={title}><Icon className="fill-white dark:fill-red-400 sm:fill-red-400 w-12 sm:w-8 m-1 sm:m-3" /></div>
              )
            )
          }
        </div>
      </div>
    </>
  )
}
interface IDetailsContainer extends ISkillPresentation {
  position: number
}

function SecuritySection(): JSX.Element {  
  const [detailsContainer, setDetailsContainer] = useState<IDetailsContainer|null>(null);

  return (
    <Container className={'relative flex flex-col h-96 2xs:h-80 md:h-72 xl:h-auto'}>
        <SkillContainerTitle title={skillsPresentation.security.title} Icon={skillsPresentation.security.Icon} />
        <div className="text-lg grow">
          {
            detailsContainer ? 
            <>
              <h4 className="font-medium text-xl">{detailsContainer.title}</h4>
              <p>{detailsContainer.description}</p>
            </> :
            <p>{skillsPresentation.security.description}</p>
          }
        </div>
        <div className="relative z-4">
          {
            skillsDetails.security.map((skill, index) => (
              <div 
                className={"inline-block p-1 sm:p-2 transition-all"} 
                onMouseEnter={() => setDetailsContainer({...skill, position: index})} 
                onMouseLeave={() => setDetailsContainer(null)} 
                style={{transform: detailsContainer?.position === index ? 'scale(1.15)' : ''}}
              >
                <skill.Icon className={'w-7 2xs:w-9 sm:w-10 fill-red-400 inline-block'} />
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