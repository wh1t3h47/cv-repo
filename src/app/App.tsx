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
    <div className="bg-white text-gray-800 p-8 grid grid-cols-12 gap-8 rounded-lg shadow-lg">
      <div className="col-span-1 flex flex-col items-center">
        <div className="bg-blue-500 h-16 w-8 mb-4"></div>
        <div className="h-20 w-4 border-t-4 border-b-4 border-blue-500 mb-4"></div>
        <div className="bg-blue-500 h-16 w-8"></div>
      </div>
      <div className="flex items-center mb-8">
        <div className="h-16 w-16 bg-blue-500 rounded-lg flex items-center justify-center mr-6">
          {/* Seu ícone pessoal */}
        </div>
        <div>
          <h1 className="text-4xl font-bold">Antônio Martos Harres</h1>
          <p className="text-xl">tom.mharres@gmail.com</p>
        </div>
      </div>
      <div className="col-span-11 grid grid-cols-3 gap-8">
        <aside className="col-span-1">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Certificações</h2>
            <ul className="list-disc pl-8">
              <li>FCE - Nível B2 em Inglês</li>
              <li>
                <SiSololearn className="ml-1 mr-3" /> SoloLearn (EUA)
                Certificados em <br />
                <ul className="list-disc pl-8">
                  <li>
                    <span className="text-blue-500">
                      <SiSololearn className="ml-1 mr-3" /> Frontend:
                    </span>{" "}
                    React + Redux, HTML, CSS e Web Design Responsivo;
                    <br />
                  </li>
                </ul>
                <ul className="list-disc pl-8">
                  <li>
                    <span className="text-blue-500">
                      <SiSololearn className="ml-1 mr-3" /> Backend:
                    </span>{" "}
                    JavaScript, SQL e Python;
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Habilidades</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <ul className="list-disc pl-8">
                <li>
                  <SiReact className="text-blue-500 mr-3" />
                  React, <SiNextdotjs className="text-blue-500 mr-3" /> Next.js;
                </li>
                <li>
                  <SiHtml5 className="text-blue-500 mr-3" /> HTML5,{" "}
                  <SiCss3 className="text-blue-500 mr-3" /> CSS3;
                </li>
                <li>
                  <SiTailwindcss className="text-blue-500 mr-3" /> Tailwind CSS,{" "}
                  <SiBootstrap className="text-blue-500 mr-3" /> Bootstrap,{" "}
                  <SiMui className="text-blue-500 mr-3" /> Material-UI;
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <ul className="list-disc pl-8">
                <li>
                  <SiTypescript className="text-blue-500 mr-3" /> TypeScript,{" "}
                  <SiJavascript className="text-blue-500 mr-3" /> JavaScript;
                </li>
                <li>
                  <SiNodedotjs className="text-blue-500 mr-3" /> Node.js,{" "}
                  <SiNestjs className="text-blue-500 mr-3" /> NestJS,{" "}
                  <SiExpress className="text-blue-500 mr-3" /> ExpressJS;
                </li>
                <li>
                  <SiMysql className="text-blue-500 mr-3" /> MySQL,{" "}
                  <SiMicrosoftsqlserver className="text-blue-500 mr-3" /> MSSQL,{" "}
                  <SiPostgresql className="text-blue-500 mr-3" /> PostgreSQL;
                </li>
                <li>
                  <SiRedis className="text-blue-500 mr-3" /> Redis,{" "}
                  <SiMongodb className="text-blue-500 mr-3" /> MongoDB,{" "}
                  <SiFirebase className="text-blue-500 mr-3" /> Firebase;
                </li>
                <li>
                  <SiPython className="text-blue-500 mr-3" /> Python,{" "}
                  <SiDjango className="text-blue-500 mr-3" /> Django;
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Infraestrutura</h3>
              <ul className="list-disc pl-8">
                <li>
                  <SiAmazonaws className="text-blue-500 mr-3" />
                  AWS, <SiDocker className="text-blue-500 mr-3" /> Docker,{" "}
                  <SiNginx className="text-blue-500 mr-3" /> Nginx,{" "}
                  <SiApache className="text-blue-500 mr-3" /> Apache;
                </li>
                <li>
                  <SiLinux className="text-blue-500 mr-3" /> Linux,{" "}
                  <SiShell className="text-blue-500 mr-3" /> Bash;
                </li>
              </ul>
            </div>
          </div>
        </aside>
        <section className="col-span-2">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Educação</h2>
            <div className="mb-4 flex items-center">
              <FaGraduationCap className="text-blue-500 ml-1 mr-2" />
              <span>
                Estudo Autodidata de Eletrônica desde os 7 anos de idade
              </span>
            </div>
            <div className="flex items-center">
              <FaBook className="text-blue-500 ml-1 mr-3" />
              <span>Cultura Inglesa - 6 anos de estudo</span>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Experiência Profissional
            </h2>
            <div className="mb-4 flex items-center">
              <FaBriefcase className="text-blue-500 ml-1 mr-2" />
              <div>
                <h3 className="text-xl font-semibold">ZenBit Tech</h3>
                <p>Full-stack Developer</p>
                <p>Jun 2022 - Out 2022 (5 meses)</p>
                <p>Trabalho remoto (Polônia/Ucrânia)</p>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <FaBriefcase className="text-blue-500 ml-1 mr-2" />
              <div>
                <h3 className="text-xl font-semibold">
                  RedFox Digital | IT Company
                </h3>
                <p>Desenvolvedor Full-Stack Pleno II</p>
                <p>Jul 2021 - Mai 2022 (11 meses)</p>
                <p>Trabalho remoto (São Paulo)</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaBriefcase className="text-blue-500 ml-1 mr-2" />
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
  );
};

export default Curriculum;
