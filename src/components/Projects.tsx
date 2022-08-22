import { projects } from "../content/projects";
import Container from "./Container";
import SectionTitle from "./SectionTitle";


function Project({project}: any) {

  return  <Container className="flex my-6">
            <div className="p-2 flex flex-col flex-grow">
              <div className="flex-grow">
                <div>
                  <h2 className="text-3xl font-bold mr-4 inline-block">{project.title}</h2>
                  <div className="inline-flex self-end align-bottom">
                    {project.screens.map((item: any) => (
                      <button><item.Icon className="w-8 m-1 fill-red-400" /></button>
                    ))}
                  </div>
                </div>
                
                <p className="mt-4">{project.description}</p>   
              </div>
              <div className={`flex flex-col`}>
                <div className={`flex m-2`}>
                  {project.dependencies.map((item: any) => (
                    <div title={item.title}><item.Icon className="w-4 -mb-1 m-1 fill-red-400"/></div>
                  ))}
                </div>
                <div className={``}>
                  <button className="btn">Detalhes do Projeto</button>
                  
                  <button className="btn">Github</button>
                  <button className="btn">Live demo</button>
                </div>
              </div>
            </div>
            <div className={`w-[640px] h-[360px] bg-red-800 shrink-0 `}></div>
          </Container>
}



export default function Projects() {
  return  <>
            <SectionTitle title='Projects' />
            {
              projects.map((proj) => (
                <Project project={proj} />
              ))
            }
          </>
}