import { minorProjects } from "../content/projects";
import { GitLogo, NPMLogo, ReactLogo } from "../lib/icons";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function MinorProjects() {
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

function MinorProject({project}:any) {
  let {title, description} = project;
  if (title.length > 18)
    title = title.substring(0,18)+'...'
  return (
    <Container className="w-60 mr-4">
      <ReactLogo className="w-48 h-48 fill-red-400"/>
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
