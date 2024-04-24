import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Container, Main } from "@/styles/projects";
import projects from "./api/projects.json";
import BoxProject from "@/components/BoxProject";

export default function Project() {
  return (
    <Container>
      <Navbar id="top" />
      <Main>
        <h2 className="title">Projetos</h2>
        <span className="subtitle">Dê uma olhada nos meus projetos</span>

        <div className="projects">
          {projects.map((project, index) => {
            return (
              <BoxProject
                description={project.description}
                image={project.images}
                name={project.name}
                period={project.period}
                techs={[]}
                key={index}
              />
            );
          })}
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
