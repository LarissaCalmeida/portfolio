import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Container, Main } from "@/styles/project";
import { GetStaticProps } from "next";
import projects from "../api/projects.json";
import Head from "next/head";
import Link from "next/link";

interface IProps {
  project: IProject;
}

interface IProject {
  id: number;
  name: string;
  description: string;
  period: string;
  images: string;
  tag: string;
  background: string;
  role: string;
  team: string;
  resume: string;
  link_demo: string;
  link_github: string;
}

export default function Page(props: IProps) {
  return (
    <Container>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500&family=Kalam&family=Poppins&display=swap"
          rel="stylesheet"
        />
        <title>Portfólio | Projeto {props.project.name}</title>
      </Head>
      <Navbar id="top" />
      <Main>
        <div className="container-project">
          <img src={props.project.background} alt="" />

          <div className="text">
            <div className="header">
              <span>{props.project.period}</span>
            </div>

            <h2 className="title">{props.project.name}</h2>
            <p className="role">
              <span>Minha função: </span>
              {props.project.role}
            </p>

            <p className="team">
              <span>Meu time: </span>
              {props.project.team}
            </p>

            <p className="resume">{props.project.resume}</p>
          </div>
        </div>
        {(props.project.link_demo || props.project.link_github) && (
          <div className="links">
            <h3 className="title">Dê uma olhada neste projeto</h3>
            {props.project.link_demo && (
              <Link href={props.project.link_demo} target="_blank">
                <button type="button" className="primary">
                  <img src="/globo.svg" alt="Site" />
                  Link demo
                  <img src="/redirect.svg" alt="Site" />
                </button>
              </Link>
            )}
            {props.project.link_github && (
              <Link href={props.project.link_github} target="_blank">
                <button type="button" className="secondary">
                  <img src="/github_redirect.svg" alt="Site" />
                  Code
                  <img src="/redirect.svg" alt="Site" />
                </button>
              </Link>
            )}
          </div>
        )}
      </Main>
      <Footer />
    </Container>
  );
}

export const getStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const _id = context.params?.id ? context.params.id : "";

  const project = projects.find((project) => project.id.toString() === _id);

  return {
    props: {
      project,
    },
  };
};
