import React from "react";
import { FaGraduationCap, FaBriefcase, FaBook } from "react-icons/fa";
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

const Curriculum: React.FC = () => {
  return (
    <>
      <header className="flex mt-7">
        <div className="ml-10 flex flex-col items-center">
          <div className="bg-blue-400 h-10 w-40 sm:w-64 mb-4"></div>
          <div className="h-3.5 w-32 sm:w-48 border-t-4 border-b-4 border-blue-500 mb-4"></div>
          <div className="bg-blue-400 h-10 w-40 sm:w-64 mb-4"></div>
          <div className="h-3.5 w-32 sm:w-48 border-t-4 border-b-4 border-blue-500 mb-4"></div>
          <div className="bg-blue-400 h-10 w-40 sm:w-64"></div>
        </div>
        <div className="flex items-center mb-8">
          <div className="ml-10">
            <h1 className="text-4xl font-bold whitespace-nowrap divide-y mt-1.5">
              Antônio <br /> Martos <br /> Harres
            </h1>
            <div className="mt-3 bg-zinc-300 h-1 w-64 mb-4"></div>
            <p className="text-xl text-stone-700 sm:block hidden">
              tom.mharres@gmail.com
            </p>
          </div>
        </div>
      </header>
      <div className="bg-white text-gray-800 p-8">
        <div className="grid grid-cols-12 gap-8">
          <aside className="mr-2 col-span-12 sm:col-span-5 md:col-span-6 xl:col-span-4 mb-8 sm:order-first order-last">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Certificações</h2>
              <ul className="list-disc pl-8">
                <li>FCE - Nível B2 em Inglês</li>
                <li>
                  <span className="flex-row flex">
                    SoloLearn (EUA) Certificados em
                  </span>
                  <ul className="list-none pl-1">
                    <li className="pt-2">
                      <span className="text-blue-500 flex-row flex items-center">
                        <SiSololearn className="ml-1 mr-3" /> Frontend:
                      </span>
                      <div className="pl-6">
                        React + Redux, HTML, CSS
                        <br />e Web Design Responsivo;
                      </div>
                    </li>
                    <li className="pt-1">
                      <span className="text-blue-500 flex-row flex items-center">
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
                    Tailwind ,
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
                    <span className="mx-2">
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
              <div className="mb-4 flex items-center">
                <span className="ml-1 mr-2">
                  <FaGraduationCap className="text-blue-500 " />
                </span>
                <span>
                  SENAI - PR - Técnico em Desenvolvimentos de Sistemas
                </span>
              </div>
              <div className="flex items-center">
                <span className="ml-1 mr-3">
                  <FaBook className="text-blue-500" />
                </span>
                <span>Cultura Inglesa - 6 anos de estudo (Fluente)</span>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Experiência Profissional
              </h2>
              <div className="mb-4 flex items-center">
                <span className="ml-1 mr-2">
                  <FaBriefcase className="text-blue-500" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">ZenBit Tech</h3>
                  <p>Full-stack Developer</p>
                  <p>Jun 2022 - Out 2022 (5 meses)</p>
                  <p>Trabalho remoto (Polônia/ Ucrânia)</p>
                </div>
              </div>
              <div className="mb-4 flex items-center">
                <span className="ml-1 mr-2">
                  <FaBriefcase className="text-blue-500" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">RedFox Tech</h3>
                  <p>Desenvolvedor Full-Stack Pleno II</p>
                  <p>Jul 2021 - Mai 2022 (11 meses)</p>
                  <p>Trabalho remoto (São Paulo)</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="ml-1 mr-2">
                  <FaBriefcase className="text-blue-500" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">YouSendr</h3>
                  <p>Desenvolvedor Júnior</p>
                  <p>Mai 2020 - Abr 2021 (1 ano)</p>
                  <p>Curitiba, Paraná, Brasil</p>
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
