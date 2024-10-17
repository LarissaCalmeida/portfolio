import BoxProject from "@/components/BoxProject";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  Container,
  ContainerImageHeader,
  ContainerTextHeader,
  Header,
  SectionAboutMe,
  SectionContactMe,
  SectionProjects,
} from "@/styles/home";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Home() {
  const { "0": text } = useTypewriter({
    words: ["I'm Larissa Carvalho", "I'm Full-Stack", "I'm Developer"],
    loop: true,
  });

  const [fieldFormContact, setFieldFormContact] = useState<{
    name: string;
    email: string;
    message: string;
  }>({ name: "", email: "", message: "" });

  async function handleSubmit(event: any) {
    event.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fieldFormContact),
      });

      if (!response.ok) {
        toast.error(
          "Ops, não foi possível enviar o e-mail. Tente novamente mais tarde.",
          {
            duration: 3000,
          }
        );
        // throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      toast.success("Mensagem enviada com sucesso :)", {
        duration: 3000,
      });
    } catch (err) {
      console.error(err);
      toast.error(
        "Ops, não foi possível enviar o e-mail. Tente novamente mais tarde.",
        {
          duration: 3000,
        }
      );
    }
  }

  return (
    <>
      <Container>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500&family=Kalam&family=Poppins&display=swap"
            rel="stylesheet"
          />
          <title>Portfólio</title>
        </Head>
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
                a experiência! Sou desenvolvedora full-stack apaixonada, com
                mais de três anos moldando o futuro da web. Especializada em
                tecnologias como Node.js, React, AngularJS, MongoDB e muito
                mais, trago habilidades diversificadas para criar soluções
                robustas e intuitivas.
              </p>

              <div className="buttons">
                <Link href="https://drive.usercontent.google.com/u/0/uc?id=1vrWCez34ZkXGKM2oE7Zg8e6ryyWtm7df&export=download">
                  <button className="button secondary">
                    <img src="/ReadCvLogo.svg" alt="" />
                    Meu CV
                  </button>
                </Link>
                <Link href="#contact">
                  <button className="button primary">
                    Entrar em contato
                    <img src="/arrow_btn.svg" alt="" />
                  </button>
                </Link>
              </div>
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
                como WordPress, onde transformo conceitos em interfaces
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
                description="Gerencie sua fazenda e tenha os relatórios na palma de sua mão."
                image="/projects/eboi.png"
                name="E-Boi"
                period="2022 - 2024"
                techs={[]}
                index="4"
              />
              <BoxProject
                description="Plataforma de gerenciamento de clínicas projetada para otimizar o controle."
                image="/projects/tagarelas.png"
                name="Tagarelas"
                period="2024"
                techs={[]}
                index="6"
              />
              <BoxProject
                description="O Construcredi é uma plataforma robusta de gestão empresarial."
                image="/projects/construcredi.png"
                name="Construcredi"
                period="2024"
                techs={[""]}
                index="14"
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
                <Link href="https://github.com/LarissaCalmeida">
                  <img src="/github_contact.svg" alt="" />
                </Link>
                <Link href="https://www.linkedin.com/in/larissa-calmeida/">
                  <img src="/linkedin_contact.svg" alt="" />
                </Link>

                <Link href="https://www.instagram.com/lari.code/">
                  <img src="/instagram_contact.svg" alt="" />
                </Link>
              </div>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nome"
                required
                value={fieldFormContact.name}
                onChange={(e) => {
                  setFieldFormContact({
                    ...fieldFormContact,
                    name: e.target.value,
                  });
                }}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                required
                value={fieldFormContact.email}
                onChange={(e) => {
                  setFieldFormContact({
                    ...fieldFormContact,
                    email: e.target.value,
                  });
                }}
              />
              <textarea
                name="message"
                id="message"
                placeholder="Sua mensagem"
                required
                value={fieldFormContact.message}
                onChange={(e) => {
                  setFieldFormContact({
                    ...fieldFormContact,
                    message: e.target.value,
                  });
                }}
              />
              <button type="submit" className="button">
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
