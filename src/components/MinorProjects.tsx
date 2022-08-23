import { minorProjects } from "../content/projects";
import { GitLogo, NPMLogo } from "../lib/icons";
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
  return (
    <Container className="w-60 mr-4">
      <div className="w-48 h-48 bg-red-800"></div>
      <div className="flex flex-col">
        <div className="flex-grow">
          <h2 className="font-bold text-lg">{project.title}</h2>
          <p className="text-sm">{project.description}</p>
        </div>
        <div className="flex">
          <GitLogo className="w-6 m-1" />
          <NPMLogo className="w-6 m-1" />
        </div>
      </div>
    </Container>
  )
}