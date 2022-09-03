import { IminorProject, minorProjects } from "../../content/projects";
import { GitLogo, NPMLogo } from "../../lib/icons";
import Container from "../atomic/Container";
import SectionTitle from "../atomic/SectionTitle";

export default function MinorProjects(): JSX.Element {
  return (
    <>
      <SectionTitle title="Libs/Tools" />
      <div className="flex">
        {
          minorProjects.map((project) => (
            <MinorProject project={project}/>
          ))
        }
      </div>
      
    </>
  )
}

function MinorProject({project}:{project:IminorProject}): JSX.Element {
  let {title, description, Icon} = project;
  if (title.length > 20)
    title = title.substring(0,18)+'...'
    
  return (
    <Container className="w-60 mr-4">
      <Icon className="w-48 h-48 fill-red-400"/>
      <div className="flex flex-col">
        <div className="flex-grow h-[5.5rem] overflow-hidden mb-2">
          <h2 className="font-bold text-lg">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
        <div className="flex">
          <GitLogo className="w-6 m-1 fill-red-400" />
          <NPMLogo className="w-6 m-1 fill-red-400" />
        </div>
      </div>
    </Container>
  )
}