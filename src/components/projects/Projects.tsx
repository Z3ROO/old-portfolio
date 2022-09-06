import { Iproject, ITitledIcon, projects } from "../../content/projects";
import Container from "../atomic/Container";
import SectionTitle from "../atomic/SectionTitle";

export default function Projects(): JSX.Element {
  return  <>
            <SectionTitle title='Projects' />
            {
              projects.map((project) => (
                <Project {...{project}} />
              ))
            }
          </>
}

function Project({project}: {project: Iproject}): JSX.Element {

  return  <Container className={`
            my-6 flex
            flex-col
            lg:flex-row
          `}>
            <div className="p-2 flex flex-col flex-grow">
              <div className="flex-grow">
                <ProjectTitle project={project} />                
                <p className="mt-4">{project.description}</p>
              </div>
              <ProjectSpecs project={project}/>
            </div>
            <div className="flex">
              <div className={`
                hidden justify-end
                flex-row text-sm
                sm:flex-col sm:flex
                lg:hidden

              `}>
                <button className="btn">Detalhes</button>
                <button className="btn">Github</button>
                <button className="btn">Live demo</button>
              </div>            
              <ProjectPreview />   
            </div>  
          </Container>
}

function ProjectTitle({project}: {project: Iproject}): JSX.Element {
  return (
    <div>
      <h2 className="text-3xl font-bold mr-4 inline-block">{project.title}</h2>
      <div className="inline-flex self-end align-bottom">
        {project.screens.map((item) => (
          <button className="relative group">
            <item.Icon className="w-6 m-1 fill-red-400" />
            <BounceInfoTag item={item} />
          </button>
        ))}
      </div>
    </div>
  )
}

function ProjectSpecs({project}:{project: Iproject}): JSX.Element {
  return (
    <div className={`flex flex-col`}>
      <div className={`flex m-2`}>
        {project.dependencies.map((item: any) => (
          <div title={item.title}>
            <item.Icon className="w-4 -mb-1 m-1 fill-red-400"/>
          </div>
        ))}
      </div>
      <div className={`
        flex text-xs flex-col
        2xs:flex-row
        xs:text-sm
        sm:hidden sm:text-base
        lg:flex
      `}>
        <button className="btn">Detalhes</button>
        <button className="btn">Github</button>
        <button className="btn">Live demo</button>
      </div>
    </div>
  )
}

function ProjectPreview(): JSX.Element {
  return (
    <div className="shrink-0 ml-8 flex-grow relative self-start">
      <div className={`
        bg-red-400 shrink-0 rounded mx-[auto]
        hidden 
        2xs:w-[240px] 2xs:h-[135px] 2xs:block 
        xs:w-[320px] xs:h-[180px] 
        lg:m-0 
        xl:w-[512px] xl:h-[288px] xl:block
        2xl:w-[512px] 2xl:h-[288px] 
      `}>
        <div className={`
        bg-red-300 shrink-0 absolute dark:border-gray-800 border-gray-300 rounded-xl shadow-lg 
          hidden
          2xs:w-[67px] 2xs:h-[120px] 2xs:border-[3px] 2xs:-bottom-2 2xs:-left-6  2xs:block
          xs:w-[90px] xs:h-[160px] xs:border-4 xs:-bottom-2 xs:-left-6 
          lg:w-[90px] lg:h-[160px] lg:border-4 lg:-bottom-2 lg:-left-6 
          xl:w-[135px] xl:h-[240px] xl:border-[6px] xl:-bottom-2 xl:-left-8 
        `}>

        </div>
      </div>
    </div>
  )
}

function BounceInfoTag({item}:{item: ITitledIcon}): JSX.Element {

  return (
    <div className="absolute hidden group-hover:block group-hover:bounce text-white bg-red-400 px-2 py-1 rounded -top-10 left-0 whitespace-nowrap">
      {item.title}
      <div className="absolute w-0 h-0 border-8 border-red-400 border-b-transparent border-r-transparent border-l-transparent"></div>
    </div>
  )
}