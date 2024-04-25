import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Container, Main } from "@/styles/projects";
import projects from "./api/projects.json";
import BoxProject from "@/components/BoxProject";
import Head from "next/head";

export default function Project() {
  return (
    <Container>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500&family=Kalam&family=Poppins&display=swap"
          rel="stylesheet"
        />
        <title>Portfólio | Todos Projetos</title>
      </Head>
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
                index={index.toString()}
              />
            );
          })}
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
