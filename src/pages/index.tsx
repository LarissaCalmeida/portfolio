import BoxProject from "@/components/BoxProject";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  Container,
  ContainerImageHeader,
  ContainerSocialMediaHeader,
  ContainerTextHeader,
  Header,
  SectionAboutMe,
  SectionContactMe,
  SectionProjects,
} from "@/styles/home";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Home() {
  const { "0": text } = useTypewriter({
    words: ["I'm Larissa Carvalho", "I'm Full-Stack", "I'm Developer"],
    loop: true,
  });

  return (
    <>
      <Container>
        <Navbar id="top" />
        <Header>
          <div className="wrapper">
            {" "}
            <ContainerTextHeader>
              <div className="container-title">
                <h1 className="title">Hi, {text}</h1>
                <span className="cursor">
                  <Cursor cursorColor="#fff" />
                </span>
              </div>

              <span className="subtitle">
                Desenvolvedora full-stack e entusiasta da inovação
              </span>
              <p className="paragraph">
                Bem-vindo ao meu espaço digital, onde a inovação se encontra com
                a experiência! Sou uma desenvolvedora full-stack apaixonada, com
                mais de três anos moldando o futuro da web. Especializada em
                tecnologias como Node.js, React, AngularJS, MongoDB e muito
                mais, trago habilidades diversificadas para criar soluções
                robustas e intuitivas.
              </p>
              <Link href="#contact">
                <button className="button">
                  Entrar em contato
                  <img src="/arrow_btn.svg" alt="" />
                </button>
              </Link>
            </ContainerTextHeader>
            <ContainerImageHeader>
              <img src="/bro.png" alt="" />
              <img src="/arrow_header.png" alt="" />
            </ContainerImageHeader>
          </div>
        </Header>

        <SectionAboutMe id="about-me">
          <div className="container">
            <img src="/designer_girl.png" alt="" />

            <div className="text">
              <div className="icons">
                <img src="/techs.svg" alt="" />
              </div>

              <h2 className="title">About me</h2>
              <span className="subtitle">
                Transformando Visões em Realidade
              </span>
              <p className="paragraph">
                Você encontrará projetos que abrangem desde aplicações dinâmicas
                e escaláveis até experiências de usuário envolventes. Minha
                proficiência vai além do código, estendendo-se a plataformas
                como WordPress e Wix, onde transformo conceitos em interfaces
                visualmente impactantes. <br />
                <br />
                Seja você um empreendedor ambicioso, uma startup em ascensão ou
                uma empresa consolidada, estou pronta para colaborar na
                construção de soluções que ultrapassem as expectativas. Explore
                meu portfólio para descobrir como posso elevar sua presença
                online, otimizar processos e impulsionar o sucesso digital.
              </p>

              <Link href="#contact">
                <button className="button">
                  Entrar em contato
                  <img src="/arrow_btn.svg" alt="" />
                </button>
              </Link>
            </div>
          </div>
        </SectionAboutMe>

        <SectionProjects id="projects">
          <div className="container">
            <h2 className="title">Projects</h2>
            <span className="subtitle">
              Dê uma olhada nos meus projetos em destaque
            </span>

            <div className="projects">
              <img src="/star_project_top.svg" alt="" className="star_top" />
              <img
                src="/star_project_bottom.svg"
                alt=""
                className="star_bottom"
              />

              <BoxProject
                description="Plataforma de gerenciamento de fazenda."
                image="/projects/eboi.png"
                name="E-Boi"
                period="2022 - 2024"
                techs={[]}
              />
              <BoxProject
                description="Plataforma de gerenciamento de advocacia. Administre seu escritório com mais facilidade."
                image="/projects/law.png"
                name="Jupiter - Law"
                period="2023 - 2024"
                techs={[]}
              />
              <BoxProject
                description="A samcorp é um site de soluções tecnológicas"
                image="/projects/samcorp.png"
                name="SamCorp"
                period="2023"
                techs={[""]}
              />
            </div>

            <Link href="/projects">
              <button className="button">
                Veja mais
                <img src="/arrow_btn.svg" alt="" />
              </button>
            </Link>
          </div>
        </SectionProjects>
        <SectionContactMe id="contact">
          <div className="container">
            <div className="contact">
              <img src="/avatar.svg" alt="" />
              <h2 className="title">Contact</h2>
              <span className="subtitle">
                Gostou do meu trabalho? Vamos trabalhar juntos
              </span>

              <p className="paragraph">
                Estou sempre pronta para bater um papo. Envie-me um e-mail para
                <span> dev.larissacarvalho@gmail.com</span> ou me chame nas
                redes sociais. Juntos, podemos criar algo extraordinário. Vamos
                transformar ideias em realidade!
              </p>

              <ul>
                <li>
                  <img src="/email.svg" alt="" />
                  <Link href="mailto:dev.larissacarvalho@gmail.com">
                    dev.larissacarvalho@gmail.com
                  </Link>
                </li>
                <li>
                  <img src="/telephone.svg" alt="" />
                  <Link href="tel:+5573988684480">+55 (73) 98868-4480</Link>
                </li>
              </ul>

              <div className="icons">
                <Link href="">
                  <img src="/github_contact.svg" alt="" />
                </Link>
                <Link href="">
                  <img src="/linkedin_contact.svg" alt="" />
                </Link>

                <Link href="">
                  <img src="/instagram_contact.svg" alt="" />
                </Link>
              </div>
            </div>
            <form className="form">
              <input type="text" name="name" id="name" placeholder="Nome" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Sua mensagem"
              />
              <button className="button">
                Me mande uma mensagem
                <img src="/arrow_btn.svg" alt="" />
              </button>
            </form>
          </div>
        </SectionContactMe>

        <Footer />
      </Container>
    </>
  );
}
