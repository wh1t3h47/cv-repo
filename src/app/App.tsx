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
  return (
    <>
      <header className="pt-7 pb-2 bg-purple-100 print:bg-purple-50">
        <div className="md:flex print:flex items-center mb-8">
          <div className="mx-10 bg-cyan-700">
            <div className="mx-10 pb-3">
              <h1 className="text-3xl print:text-2xl text-yellow-200 font-bold whitespace-nowrap divide-y mt-1.5">
                Antônio Martos Harres
              </h1>
              <div className="mt-3 bg-pink-300 print:bg-pink-200 h-1 w-64 mb-4"></div>
              <p className="text-xl print:text-lg text-yellow-100">
                <FaEnvelope className="inline-block mr-2" />
                tom.mharres@gmail.com
              </p>
              <p className="text-xl print:text-lg text-yellow-100">
                <FaWhatsapp className="inline-block mr-2" />
                +55 41 98876-5037
              </p>
              <p className="text-xl print:text-lg text-yellow-100">
                <FaGithub className="inline-block mr-2" />
                https://github.com/wh1t3h47
              </p>
              <p className="text-xl print:text-lg text-yellow-100 mt-1">
                <FaGlobe className="inline-block mr-2 mb-1" />
                Curitiba - PR - Brasil
              </p>
            </div>
          </div>
          <div className="flex flex-col mx-5 print:-ms-5 px-10 md:px-0 self-baseline">
            <p className="text-gray-900 text-2xl print:text-xl font-semibold sm:mt-5 self-center lg:self-baseline">
              Desenvolvedor Full-Stack JavaScript Especialista em React e Next
            </p>
            <p className="text-gray-900 text-lg print:text-md t-3 self-center lg:self-baseline md:pt-1 lg:pt-5">
              Apaixonado pelo aprendizado e resolvendo problemas desde criança,
              possuo experiência sólida em desenvolvimento frontend e SEO.
            </p>
          </div>
        </div>
      </header>

      <div className="bg-white text-gray-800 p-8">
        <div className="grid grid-cols-12 gap-8">
          <aside className="mr-2 col-span-12 sm:col-span-6 md:col-span-5 xl:col-span-4 mb-8 sm:order-first order-last">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Certificações</h2>

              <ul className="list-disc pl-8">
                <li className="mb-4">
                  <span className="font-semibold">
                    FCE - Nível B2 em Inglês
                  </span>
                </li>
                <li className="mb-4">
                  <span className="flex-row flex font-semibold">
                    SoloLearn (EUA) Certificados em
                  </span>
                  <ul className="list-none pl-8">
                    <li className="mb-2">
                      <span className="text-blue-600 flex-row flex items-center font-semibold">
                        <SiSololearn className="ml-1 mr-3" /> Frontend:
                      </span>
                      <div className="pl-6">
                        React + Redux, HTML, CSS e Web Design Responsivo;
                      </div>
                    </li>
                    <li>
                      <span className="text-blue-600 flex-row flex items-center font-semibold">
                        <SiSololearn className="ml-1 mr-3" /> Backend:
                      </span>
                      <div className="pl-6">JavaScript, SQL e Python;</div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Habilidades</h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                <ul className="list-none pl-8">
                  <li className="flex items-baseline">
                    <span className="mx-2">
                      <SiReact className="text-blue-500" />
                    </span>
                    React,
                    <span className="mx-2">
                      <SiNextdotjs className="text-blue-500" />
                    </span>
                    Next.js;
                  </li>
                  <li className="flex items-baseline">
                    <span className="mx-2">
                      <SiHtml5 className="text-blue-500" />
                    </span>
                    HTML5,
                    <span className="mx-2">
                      <SiCss3 className="text-blue-500" />
                    </span>
                    CSS3;
                  </li>
                  <li className="flex items-baseline">
                    <span className="mx-2">
                      <SiTailwindcss className="text-blue-500" />
                    </span>
                    Tailwind,
                    <span className="mx-2">
                      <SiBootstrap className="text-blue-500" />
                    </span>
                    Bootstrap,
                    <span className="mx-2">
                      <SiMui className="text-blue-500" />
                    </span>
                    MUI;
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Backend</h3>
                <ul className="list-disc pl-8">
                  <li className="flex items-baseline">
                    <span className="mx-2">
                      <SiTypescript className="text-blue-500" />
                    </span>
                    TypeScript,
                    <span className="mx-2">
                      <SiJavascript className="text-blue-500" />
                    </span>
                    JavaScript;
                  </li>
                  <li className="flex items-baseline">
                    <span className="mx-2">
                      <SiNodedotjs className="text-blue-500" />
                    </span>
                    Node.js,
                    <span className="mx-2">
                      <SiNestjs className="text-blue-500" />
                    </span>
                    NestJS,
                    <span className="mx-2">
                      <SiExpress className="text-blue-500" />
                    </span>
                    ExpressJS;
                  </li>
                  <li className="flex items-baseline">
                    <span className="mx-2">
                      <SiMysql className="text-blue-500" />
                    </span>
                    MySQL,
                    <span className="mx-2">
                      <SiMicrosoftsqlserver className="text-blue-500" />
                    </span>
                    MSSQL,
                    <span className="mx-2">
                      <SiPostgresql className="text-blue-500" />
                    </span>
                    PostgreSQL;
                  </li>
                  <li className="flex items-baseline">
                    <span className="mx-2">
                      <SiRedis className="text-blue-500" />
                    </span>
                    Redis,
                    <span className="mx-2">
                      <SiMongodb className="text-blue-500" />
                    </span>
                    MongoDB,
                    <span className="mx-2">
                      <SiFirebase className="text-blue-500" />
                    </span>
                    Firebase;
                  </li>
                  <li className="flex items-baseline">
                    <span className="mx-2">
                      <SiPython className="text-blue-500" />
                    </span>
                    Python,
                    <span className="mx-2">
                      <SiDjango className="text-blue-500" />
                    </span>
                    Django;
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Infraestrutura</h3>
                <ul className="list-disc pl-8">
                  <li className="flex items-baseline">
                    <span className="mx-2">
                      <SiAmazonaws className="text-blue-500" />
                    </span>
                    AWS,{" "}
                    <span className="mx-2">
                      <SiDocker className="text-blue-500" />
                    </span>
                    Docker,
                    <span className="mx-2">
                      <SiNginx className="text-blue-500" />
                    </span>
                    Nginx,
                    <span className="ml-2 mr-1">
                      <SiApache className="text-blue-500" />
                    </span>
                    Apache;
                  </li>
                  <li className="flex items-baseline">
                    <span className="mx-2">
                      <SiLinux className="text-blue-500" />
                    </span>
                    Linux,
                    <span className="mx-2">
                      <SiShell className="text-blue-500" />
                    </span>
                    Bash;
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          <section className="ml-1 col-span-12 sm:ml-16 sm:col-span-7 md:col-span-6 lg:col-span-4 2xl:col-span-3 mt-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Educação</h2>

              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <span className="ml-1 mr-2">
                    <FaGraduationCap className="text-blue-500" />
                  </span>
                  <span className="font-semibold text-lg">SENAI - PR</span>
                </div>
                <p className="text-md">
                  Técnico em Desenvolvimento de Sistemas
                </p>
                <p className="text-md">2023 - Atualmente</p>
              </div>

              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <span className="ml-1 mr-3">
                    <FaBook className="text-blue-500" />
                  </span>
                  <span className="font-semibold text-lg">
                    Le Centre Social et Culturel de l'Arbrisseau
                  </span>
                </div>
                <p className="text-md">Intercâmbio em Lille, França</p>
                <p className="text-md">Francês Básico/ A1</p>
                <p className="text-md">2017</p>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <span className="ml-1 mr-3">
                    <FaBook className="text-blue-500" />
                  </span>
                  <span className="font-semibold text-lg">
                    Cultura Inglesa - Consulado Britânico
                  </span>
                </div>
                <p className="text-md">Inglês Fluente/ C1</p>
                <p className="text-md">2012-2017</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Experiência Profissional
              </h2>

              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <span className="ml-1 mr-2">
                    <FaBriefcase className="text-blue-500" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">ZenBit Tech</h3>
                    <p className="font-medium">Full-stack Developer</p>
                    <p className="text-md">Jun 2022 - Out 2022 (5 meses)</p>
                    <p className="text-md">
                      Trabalho remoto (Polônia/ Ucrânia)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <span className="ml-1 mr-2">
                    <FaBriefcase className="text-blue-500" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">RedFox Tech</h3>
                    <p className="font-medium">
                      Desenvolvedor Full-Stack Pleno II
                    </p>
                    <p className="text-md">Jul 2021 - Mai 2022 (11 meses)</p>
                    <p className="text-md">Trabalho remoto (São Paulo)</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <span className="ml-1 mr-2">
                    <FaBriefcase className="text-blue-500" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">YouSendr</h3>
                    <p className="font-medium">Desenvolvedor Júnior</p>
                    <p className="text-md">Mai 2020 - Abr 2021 (1 ano)</p>
                    <p className="text-md">Curitiba, Paraná, Brasil</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Curriculum;
