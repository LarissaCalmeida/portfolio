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
  SectionCopy,
  SectionHowWork,
  SectionProjects,
  SectionServices,
} from "@/styles/home";
import { Code, Figma, Loader2, Search, ShieldCheck } from "lucide-react";
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

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [fieldFormContact, setFieldFormContact] = useState<{
    name: string;
    email: string;
    message: string;
  }>({ name: "", email: "", message: "" });

  async function handleSubmit(event: any) {
    event.preventDefault();

    setIsLoading(true);

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
      } else {
        toast.success("Mensagem enviada com sucesso :)", {
          duration: 3000,
        });
      }
    } catch (err) {
      console.error(err);
      toast.error(
        "Ops, não foi possível enviar o e-mail. Tente novamente mais tarde.",
        {
          duration: 3000,
        }
      );
    } finally {
      setIsLoading(false);
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
        <Header>
          <Navbar id="top" />
          <div className="wrapper-header">
            {" "}
            <ContainerTextHeader>
              <span className="subtitle">
                DESENVOLVEDORA ESPECIALIZADA EM SOLUÇÕES MODERNAS
              </span>
              <h1 className="title">
                Desenvolvo Experiências Digitais que Conectam Marcas ao Futuro
              </h1>
              <p className="paragraph">
                Sites, sistemas e interfaces modernas para empresas que exigem
                alto desempenho.
              </p>

              <div className="buttons">
                <Link href="https://drive.usercontent.google.com/u/0/uc?id=1vrWCez34ZkXGKM2oE7Zg8e6ryyWtm7df&export=download">
                  <button className="button secondary">
                    <img src="/ReadCvLogo.svg" alt="" />
                    Ver portfolio
                  </button>
                </Link>
                <Link href="#contact">
                  <button className="button primary">
                    Falar comigo
                    <img src="/arrow_btn.svg" alt="" />
                  </button>
                </Link>
              </div>
            </ContainerTextHeader>
            <ContainerImageHeader>
              {/* <img src="/bro.png" alt="" /> */}
              {/* <img src="/arrow_header.png" alt="" /> */}
            </ContainerImageHeader>
          </div>
        </Header>

        <SectionCopy>
          <span>100% focada em entregar a melhor experiência</span>
          <img src="/star.svg" alt="" className="star_top" />
          <span>Processo totalmente estruturado e transparente</span>
          <img src="/star.svg" alt="" className="star_top" />
          <span>Atendimento personalizado e eficiente</span>
        </SectionCopy>

        <SectionAboutMe id="about-me">
          <div className="container">
            <img src="/profile.png" alt="" />

            <div className="text">
              <div className="icons">
                <img src="/techs.svg" alt="" />
              </div>

              <h2 className="title">About me</h2>
              <span className="subtitle">
                Paixão pela Transformação Digital
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

              {/* <Link href="#contact">
                <button className="button">
                  Entrar em contato
                  <img src="/arrow_btn.svg" alt="" />
                </button>
              </Link> */}
            </div>
          </div>
        </SectionAboutMe>
        <SectionServices>
          <div className="container">
            <div className="container-title">
              <h2 className="title">O que eu faço</h2>
              <span className="subtitle">
                Serviços que ofereço para o seu negócio
              </span>
            </div>

            <div className="container-services">
              <div>
                <p className="text">Desenvolvimento Web</p>
                <span className="number">(001)</span>
              </div>
              <div>
                <span className="number">(002)</span>
                <p className="text">Otimização SEO</p>
              </div>
              <div>
                <p className="text">Integrações e Automações</p>
                <span className="number">(003)</span>
              </div>
              <div>
                <span className="number">(004)</span>
                <p className="text">Sistemas sob medida</p>
              </div>
            </div>
          </div>
        </SectionServices>
        <SectionHowWork>
          {" "}
          <div className="container">
            <div className="container-title">
              <h2 className="title">Como trabalho</h2>
              <span className="subtitle">
                Guia passo a passo para o seu negócio
              </span>
            </div>

            <div className="container-steps">
              <div className="container-step">
                <div className="step">
                  <div className="icon">
                    <Search />
                  </div>
                  <div>
                    <h3 className="title-2">Diagnóstico</h3>
                    <p className="paragraph">
                      Realizo um diagnóstico detalhado do seu negócio para
                      entender as necessidades e objetivos.
                    </p>
                  </div>
                </div>

                <img src="/line-right.png" alt="Linha vertical" />
              </div>

              <div className="container-step">
                <div className="step">
                  <div className="icon">
                    <Figma />
                  </div>
                  <div>
                    <h3 className="title-2">Prototipação</h3>
                    <p className="paragraph">
                      Criação de protótipos interativos utilizando o Figma,
                      focando na experiência do usuário (UX) e interfaces
                      intuitivas (UI) para garantir facilidade de uso e
                      eficiência.
                    </p>
                  </div>
                </div>
                <img src="/line-left.png" alt="Linha vertical" />
              </div>
              <div className="container-step">
                <div className="step">
                  <div className="icon">
                    <Code />
                  </div>
                  <div>
                    <h3 className="title-2">Desenvolvimento</h3>
                    <p className="paragraph">
                      Desenvolvimento de soluções web modernas e escaláveis,
                      garantindo performance e usabilidade.
                    </p>
                  </div>
                </div>

                <img src="/line-right.png" alt="Linha vertical" />
              </div>

              <div className="container-step">
                <div className="step">
                  <div className="icon">
                    <ShieldCheck />
                  </div>
                  <div>
                    <h3 className="title-2">Entrega + Suporte</h3>
                    <p className="paragraph">
                      Entrega do projeto com suporte técnico para garantir o
                      funcionamento adequado e a manutenção contínua do sistema.
                    </p>
                  </div>
                </div>
                {/* <img src="/line-left.png" alt="Linha vertical" /> */}
              </div>
            </div>
          </div>
        </SectionHowWork>
        <SectionProjects id="projects">
          <div className="container">
            <h2 className="title">Projetos</h2>
            <span className="subtitle">Projetos em destaque</span>

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
                index="1"
              />
              <BoxProject
                description="Landing Page para a Samcorp."
                image="/projects/samcorp.png"
                name="Samcorp"
                period="2023"
                techs={[]}
                index="14"
              />
            </div>
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
                {isLoading ? "Enviando..." : "Me mande uma mensagem"}
                {isLoading ? (
                  <Loader2 className="loader" />
                ) : (
                  <img src="/arrow_btn.svg" alt="" />
                )}
              </button>
            </form>
          </div>
        </SectionContactMe>

        <Footer />
      </Container>
    </>
  );
}
