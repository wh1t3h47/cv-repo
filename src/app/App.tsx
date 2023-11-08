import React from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaBook,
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiPython,
  SiMysql,
  SiAmazonaws,
  SiDocker,
  SiLinux,
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiDjango,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
  SiJavascript,
  SiNodedotjs,
  SiApache,
  SiNginx,
  SiPostgresql,
  SiRedis,
  SiMicrosoftsqlserver,
  SiShell,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiSololearn,
} from "react-icons/si";
import "reset.css";

const Curriculum: React.FC = () => {
  const a4PrintPageClass = "print:h-[1000px]";
  const gitLink = "https://github.com/wh1t3h47";
  const waLink = "https://wa.me/5541988765037";
  const email = "tom.mharres@gmail.com";
  const mailLink = `mailto:${email}`;
  const soLink = "https://stackoverflow.com/users/5951911/overclocked-skid";
  const box911Link = "https://box911.com.br/";
  const freiRuiLink = "https://freiruidepine.com.br/";

  return (
    <>
      <header className="pt-7 pb-2 bg-slate-200 print:bg-rose-50">
        <div className="md:flex print:flex items-center mb-8">
          <div className="mx-10 bg-cyan-600">
            <div className="mx-10 pb-3 flex flex-col">
              <h1 className="text-3xl print:text-2xl text-yellow-200 font-bold whitespace-nowrap divide-y mt-1.5">
                Antônio Martos Harres
              </h1>
              <div className="mt-3 bg-pink-300 print:bg-pink-200 h-1 w-64 mb-4"></div>
              <a
                className="text-xl print:text-lg text-yellow-100"
                href={mailLink}
              >
                <FaEnvelope className="inline-block mr-2 align-sub" />
                tom.mharres@gmail.com
              </a>
              <a
                className="text-xl print:text-lg text-yellow-100"
                href={waLink}
              >
                <FaWhatsapp className="inline-block mr-2 align-sub" />
                +55 41 98876-5037
              </a>
              <a
                className="text-xl print:text-lg text-yellow-100 underline underline-offset-4"
                href={gitLink}
              >
                <FaGithub className="inline-block mr-2 align-sub" />
                {gitLink}
              </a>
              <p className="text-xl print:text-lg text-yellow-100">
                <FaGlobe className="inline-block mr-2 align-sub" />
                Curitiba - PR - Brasil
              </p>
            </div>
          </div>
          <div className="flex flex-col mx-5 print:-ms-5 px-10 md:px-0 self-baseline">
            <p className="text-gray-900 text-2xl print:text-xl font-semibold mt-5 md:mt-0 self-center lg:self-baseline">
              Desenvolvedor Full-Stack JavaScript Especialista em React e Next
            </p>
            <p className="text-gray-900 text-lg print:text-md t-3 self-center lg:self-baseline md:pt-1 lg:pt-5">
              Experiência sólida em projetos com desenvolvimento Frontend e SEO,
              atualmente em busca de projetos
            </p>
          </div>
        </div>
      </header>

      <div className="bg-white text-gray-800 px-8">
        <div className="grid grid-cols-12 gap-8">
          <aside
            className={`mr-2 px-5 col-span-12 sm:col-span-6 md:col-span-5 xl:col-span-4 mb-8 md:order-first order-last bg-slate-100 h-full w-96 ${a4PrintPageClass}`}
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold my-3.5">Certificações</h2>

              <div className="mb-4 pl-4">
                <span className="flex-row flex font-semibold">
                  SoloLearn (EUA):
                </span>

                <div className="pl-9">
                  <div className="my-3">
                    <span className="text-indigo-400 flex-row flex items-center font-semibold">
                      <SiSololearn className="ml-1 mr-2" /> Frontend:
                    </span>
                    <div className="pl-6">
                      React + Redux, HTML, CSS e Web Design Responsivo;
                    </div>
                  </div>

                  <span className="text-indigo-400 flex-row flex items-center font-semibold">
                    <SiSololearn className="ml-1 mr-2" /> Backend:
                  </span>
                  <p className="pl-6">JavaScript, SQL e Python;</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Habilidades</h2>
            <div className="mb-6 ml-4">
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <ul className="list-none pl-8">
                <li className="flex items-baseline">
                  <span className="mx-2">
                    <SiReact className="text-indigo-400" />
                  </span>
                  React,
                  <span className="mx-2">
                    <SiNextdotjs className="text-indigo-400" />
                  </span>
                  Next.js;
                </li>
                <li className="flex items-baseline">
                  <span className="mx-2">
                    <SiHtml5 className="text-indigo-400" />
                  </span>
                  HTML5,
                  <span className="mx-2">
                    <SiCss3 className="text-indigo-400" />
                  </span>
                  CSS3;
                </li>
                <li className="flex items-baseline">
                  <span className="mx-2">
                    <SiTailwindcss className="text-indigo-400" />
                  </span>
                  Tailwind,
                  <span className="mx-2">
                    <SiBootstrap className="text-indigo-400" />
                  </span>
                  Bootstrap,
                  <span className="mx-2">
                    <SiMui className="text-indigo-400" />
                  </span>
                  MUI;
                </li>
              </ul>
            </div>
            <div className="mb-6 ml-4">
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <ul className="pl-8">
                <li className="flex items-baseline">
                  <span className="mx-2">
                    <SiTypescript className="text-indigo-400" />
                  </span>
                  TypeScript,
                  <span className="mx-2">
                    <SiJavascript className="text-indigo-400" />
                  </span>
                  JavaScript;
                </li>
                <li className="flex items-baseline">
                  <span className="mx-2">
                    <SiNodedotjs className="text-indigo-400" />
                  </span>
                  Node.js,
                  <span className="mx-2">
                    <SiNestjs className="text-indigo-400" />
                  </span>
                  NestJS,
                  <span className="mx-2">
                    <SiExpress className="text-indigo-400" />
                  </span>
                  ExpressJS;
                </li>
                <li className="flex items-baseline">
                  <span className="mx-2">
                    <SiMysql className="text-indigo-400" />
                  </span>
                  MySQL,
                  <span className="mx-2">
                    <SiMicrosoftsqlserver className="text-indigo-400" />
                  </span>
                  MSSQL,
                  <span className="mx-2">
                    <SiPostgresql className="text-indigo-400" />
                  </span>
                  PostgreSQL;
                </li>
                <li className="flex items-baseline">
                  <span className="mx-2">
                    <SiRedis className="text-indigo-400" />
                  </span>
                  Redis,
                  <span className="mx-2">
                    <SiMongodb className="text-indigo-400" />
                  </span>
                  MongoDB,
                  <span className="mx-2">
                    <SiFirebase className="text-indigo-400" />
                  </span>
                  Firebase;
                </li>
                <li className="flex items-baseline">
                  <span className="mx-2">
                    <SiPython className="text-indigo-400" />
                  </span>
                  Python,
                  <span className="mx-2">
                    <SiDjango className="text-indigo-400" />
                  </span>
                  Django;
                </li>
              </ul>
            </div>
            <div className="mb-6 ml-4">
              <h3 className="text-xl font-semibold mb-2">Infraestrutura</h3>
              <ul className="pl-8">
                <li className="flex items-baseline">
                  <span className="mx-2">
                    <SiAmazonaws className="text-indigo-400" />
                  </span>
                  AWS,
                  <span className="mx-2">
                    <SiDocker className="text-indigo-400" />
                  </span>
                  Docker,
                  <span className="mx-2">
                    <SiNginx className="text-indigo-400" />
                  </span>
                  Nginx,
                  <span className="ml-2 mr-1">
                    <SiApache className="text-indigo-400" />
                  </span>
                  Apache;
                </li>
                <li className="flex items-baseline">
                  <span className="mx-2">
                    <SiLinux className="text-indigo-400" />
                  </span>
                  Linux,
                  <span className="mx-2">
                    <SiShell className="text-indigo-400" />
                  </span>
                  Bash;
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <span className="flex items-baseline">
                <FaBook className="text-indigo-400 inline-block mr-2" />
                <h3 className="text-2xl font-semibold mb-2 inline-block">
                  Idiomas
                </h3>
              </span>
              <ul>
                <li className="ml-14 flex flex-row mb-3">
                  <span className="list-disc self-center mr-3">•</span>
                  <p>
                    Inglês Fluente / C1
                    <br />
                    Certificação FCE - British Council
                    <br />
                    Cultura Inglesa
                    <br />
                    mar 2012 - dez 2017
                  </p>
                </li>
                <li className="ml-14 flex flex-row">
                  <span className="list-disc self-center mr-3">•</span>
                  <p>
                    Francês Básico/ A1
                    <br />
                    Intercâmbio Cultural - França (Lille)
                    <br />
                    Le Centre Social et Culturel de l'Arbrisseau
                    <br />
                    Jan - Mar 2017
                  </p>
                </li>
              </ul>
            </div>
          </aside>
          <section
            className={`ml-1 col-span-12 sm:ml-16 sm:col-span-7 md:col-span-6 lg:col-span-4 2xl:col-span-3 mt-2 w-full h-96 ${a4PrintPageClass}}`}
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Experiência Profissional
              </h2>

              <div className="ml-3">
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <span className="-ml-2 mr-5">
                      <FaBriefcase className="text-indigo-400" />
                    </span>
                    <div className="my-2">
                      <span className="flex justify-between items-center w-96">
                        <h3 className="text-xl font-semibold">ZenBit Tech</h3>
                        <p className="text-md">Jun - Out 2022</p>
                      </span>
                      <p className="font-medium">Full-stack Developer</p>

                      <p className="text-md">
                        Trabalho remoto (Polônia/ Ucrânia)
                      </p>

                      <ul className="list-disc ml-4">
                        <li>
                          <p className="text-md">
                            Criação de Pipeline CI/CD com AWS, EC2, Docker,
                            Nginx, bash e GitHub Actions;
                          </p>
                          <li>
                            <p className="text-md">
                              Sistema de diagnóstico de Tuberculose - Johnson &
                              Johnson;
                            </p>
                          </li>
                          <li>
                            <p className="text-md">
                              Sistema de venda de pneus para neve - Audi.
                            </p>
                          </li>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <span className="-ml-2 mr-5">
                      <FaBriefcase className="text-indigo-400" />
                    </span>

                    <div>
                      <span className="flex justify-between items-center w-96">
                        <h3 className="text-xl font-semibold">RedFox Tech</h3>
                        <p className="text-md">Jul 2021 - Mai 2022</p>
                      </span>

                      <p className="font-medium">
                        Desenvolvedor Full-Stack Pleno II
                      </p>
                      <p className="text-md">Trabalho remoto (São Paulo)</p>
                      <ul className="list-disc ml-4">
                        <li>
                          <p className="text-md">
                            Sistema SaaS de saúde GoHealth;
                          </p>
                        </li>
                        <li>
                          <p className="text-md">
                            Sistema de Sinistro e Transporte de Cargas - Alper
                            Cargo.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex items-center mb-2">
                  <span className="-ml-2 mr-5">
                    <FaBriefcase className="text-indigo-400" />
                  </span>

                  <div>
                    <span className="flex justify-between items-center w-96">
                      <h3 className="text-xl font-semibold">YouSendr</h3>
                      <p className="text-md">Mai 2020 - Abr 2021</p>
                    </span>
                    <p className="font-medium">Desenvolvedor Júnior</p>

                    <p className="text-md">Curitiba, Paraná, Brasil</p>

                    <ul className="list-disc ml-4">
                      <li>
                        <p className="text-md">
                          Sistema SaaS de envio de emails em massa;
                        </p>
                      </li>
                      <li>
                        <p className="text-md">
                          Sistema de gerenciamento de eventos de click e
                          leitura.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-5">Educação</h2>
            <div className="mb-4 ml-10">
              <div className="flex items-center mb-2">
                <span className="mr-2">
                  <FaGraduationCap className="text-indigo-400" />
                </span>
                <span className="flex justify-between items-center w-96">
                  <p className="font-semibold text-lg">SENAI - PR</p>
                  <p className="text-md">2023 - 2026</p>
                </span>
              </div>
              <p className="text-md">Técnico em Desenvolvimento de Sistemas</p>
              <p className="text-md ml-1">
                <b>-</b> Projeto de robótica com Lego NXT;
                <br />
                <b>-</b> Website para robótica em JavaScript/ React.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-7 mb-5">Outros projetos</h2>
            <ul className="list-disc ml-14">
              <li className="mb-2">
                <p className="text-md flex-row flex items-center">
                  Sistema do Legado do Frei Rui, blog com painel de
                  administração:
                </p>
                <a className="text-sky-800 underline" href={freiRuiLink}>
                  {freiRuiLink}
                </a>
              </li>
              <li className="my-2">
                <p className="text-md flex-row flex items-center">
                  Infraestrutura da loja Box 911:
                </p>
                <a className="text-sky-800 underline" href={box911Link}>
                  {box911Link}
                </a>
              </li>
              <li className="mb-2 flex flex-col">
                <p className="text-md flex-row flex items-center">
                  Contribuições no Stack Overflow:
                  <br />
                </p>
                <a className="text-sky-800 underline" href={soLink}>
                  {soLink}
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default Curriculum;
