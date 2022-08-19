import Container from "./Container";
import SectionTitle from "./SectionTitle";


function Project(props: any) {
  const { project, odd } = props;

  return  <Container className="flex my-6">
            <div className="p-2 flex-col">
              <div>
                <h2 className="text-3xl">{project.title}</h2>
                <p className="">{project.description}</p>   
              </div>
              <div className={`${odd && ''}`}>
                <button className="btn">Detalhes do Projeto</button>
                <br/>
                <button className="btn">Github</button>
                <button className="btn">Live demo</button>
              </div>
            </div>
            {/* <img src="" alt="Project gif presentation"/> */}
            <div className={`w-[640px] h-[360px] bg-red-800 shrink-0 ${odd && '-order-1'}`}></div>
          </Container>
}

export default function Projects() {
  return  <>
            <SectionTitle title='Projects' />
            <Project project={{title:'Titulo do projeto', description: 'Lorem Ipsum is simply dummychanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}}/>
            <Project project={{title:'Titulo do projeto', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}} odd/>
            <Project project={{title:'Titulo do projeto', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}}/>
          </>
}