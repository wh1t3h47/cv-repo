import LanguageSelect from "@/components/molecules/LanguageSelect";
import { useI18n } from "@/utils/i18n/hooks/useI18n";
import { useLinks } from "@/utils/i18n/hooks/useLinks";
import { useNeutral } from "@/utils/i18n/hooks/useNeutral";
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

  const { i18n } = useI18n();
  const { neutral } = useNeutral();
  const { links } = useLinks();

  return (
    <>
      <header className="pt-7 pb-2 bg-slate-200 print:bg-slate-100">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:mx-10 bg-cyan-600 flex justify-center xs:w-10/12 w-full sm:max-w-md md:max-w-sm md:w-auto">
            <div className="mx-10 pb-3 flex flex-col">
              <h1 className="text-3xl print:text-2xl text-yellow-200 font-bold md:whitespace-nowrap divide-y mt-1.5">
                {neutral("antonio")}
              </h1>
              <div className="mt-3 bg-pink-300 print:bg-pink-200 h-1 max-w-sm w-full md:w-64 mb-4"></div>
              <a
                className="text-xl print:text-lg text-yellow-100"
                href={links("mailLink")}
              >
                <FaEnvelope className="inline-block mr-2 align-sub" />
                {neutral("email")}
              </a>
              <a
                className="text-xl print:text-lg text-yellow-100"
                href={links("waLink")}
              >
                <FaWhatsapp className="inline-block mr-2 align-sub" />
                {neutral("phone")}
              </a>
              <a
                className="text-xl print:text-lg text-yellow-100 underline underline-offset-4"
                href={links("gitLink")}
              >
                <FaGithub className="inline-block mr-2 align-sub" />
                {links("gitLink")}
              </a>
              <p className="text-xl print:text-lg text-yellow-100">
                <FaGlobe className="inline-block mr-2 align-sub" />
                {i18n("address")}
              </p>
            </div>
          </div>
          <div className="flex flex-col mx-5 print:-ms-5 px-10 md:px-0 md:mt-4 self-baseline">
            <h1 className="text-gray-900 text-2xl print:text-xl font-semibold mt-5 md:mt-0 self-center md:self-baseline print:self-baseline">
              {i18n("profession")}
            </h1>
            <p className="text-gray-900 text-lg print:text-md pt-2.5 self-center md:self-baseline print:self-baseline md:pt-5">
              {i18n("description")}
            </p>
          </div>
        </div>
      </header>

      <div className="bg-white text-gray-800 md:px-8">
        <div className="grid grid-cols-12 md:gap-8 justify-items-center md:justify-items-start">
          <aside
            className={"px-5 md:mr-2 col-span-12 md:col-span-5 lg:w-col-span-3 xl:col-span-4 mb-14 md:mb-8 md:order-first order-last bg-slate-100 print:bg-slate-50 w-full md:max-w-[28rem] md:min-w-[24rem] h-full"}
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold my-3.5">
                {i18n("certs_title")}
              </h2>

              <div className="mb-4 pl-10 md:pl-4">
                <span className="flex-row flex font-semibold">
                  {i18n("sololearn")}
                </span>

                <div className="pl-6">
                  <div className="my-3">
                    <span className="text-indigo-400 flex-row flex items-center font-semibold">
                      <SiSololearn className="ml-1 mr-2" />
                      {neutral("front_column")}
                    </span>
                    <p className="pl-6">{i18n("sololearn_front")}</p>
                  </div>

                  <span className="text-indigo-400 flex-row flex items-center font-semibold">
                    <SiSololearn className="ml-1 mr-2" />
                    {neutral("back_column")}
                  </span>
                  <p className="pl-6">{i18n("sololearn_back")}</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">{i18n("skills_title")}</h2>
            <div className="mb-6 ml-10 md:ml-4 md:mr-7">
              <h3 className="text-xl font-semibold mb-2">{neutral("front")}</h3>
              <div className="ml-7 grid xs:grid-cols-3 sm:grid-cols-6 md:grid-cols-3 gap-x-4 md:gap-x-8 mb-2">
                <div className="flex items-center">
                  <SiReact className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("react")}
                </div>
                <div className="flex items-center">
                  <SiNextdotjs className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("next")}
                </div>
              </div>
              <div className="ml-7 grid xs:grid-cols-3 sm:grid-cols-6 md:grid-cols-3 gap-x-4 md:gap-x-8 my-2">
                <div className="flex items-center">
                  <SiHtml5 className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("html")}
                </div>
                <div className="flex items-center">
                  <SiCss3 className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("css")}
                </div>
              </div>
              <div className="ml-7 grid xs:grid-cols-3 sm:grid-cols-6 md:grid-cols-3 gap-x-4 md:gap-x-8 mt-2">
                <div className="flex items-center">
                  <SiTailwindcss className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("tailwind")}
                </div>
                <div className="flex items-center">
                  <SiBootstrap className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("bootstrap")}
                </div>
                <div className="flex items-center">
                  <SiMui className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("mui")}
                </div>
              </div>
            </div>

            <div className="mb-6 ml-10 md:ml-4 md:mr-7">
              <h3 className="text-xl font-semibold mb-2">{neutral("back")}</h3>
              <div className="ml-7 grid xs:grid-cols-3 sm:grid-cols-6 md:grid-cols-3 gap-x-4 md:gap-x-8 mb-2">
                <div className="flex items-center">
                  <SiTypescript className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("ts")}
                </div>
                <div className="flex items-center">
                  <SiJavascript className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("js")}
                </div>
              </div>
              <div className="ml-7 grid xs:grid-cols-3 sm:grid-cols-6 md:grid-cols-3 gap-x-4 md:gap-x-8 my-2">
                <div className="flex items-center">
                  <SiNodedotjs className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("node")}
                </div>
                <div className="flex items-center">
                  <SiNestjs className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("nest")}
                </div>
                <div className="flex items-center">
                  <SiExpress className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("express")}
                </div>
              </div>
              <div className="ml-7 grid xs:grid-cols-3 sm:grid-cols-6 md:grid-cols-3 gap-x-4 md:gap-x-8 my-2">
                <div className="flex items-center">
                  <SiMysql className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("mysql")}
                </div>
                <div className="flex items-center">
                  <SiMicrosoftsqlserver className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("mssql")}
                </div>
                <div className="flex items-center">
                  <SiPostgresql className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("postgresql")}
                </div>
              </div>
              <div className="ml-7 grid xs:grid-cols-3 sm:grid-cols-6 md:grid-cols-3 gap-x-4 md:gap-x-8 my-2">
                <div className="flex items-center">
                  <SiRedis className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("redis")}
                </div>
                <div className="flex items-center">
                  <SiMongodb className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("mongo")}
                </div>
                <div className="flex items-center">
                  <SiFirebase className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("firebase")}
                </div>
              </div>
              <div className="ml-7 grid xs:grid-cols-3 sm:grid-cols-6 md:grid-cols-3 gap-x-4 md:gap-x-8 mt-2">
                <div className="flex items-center">
                  <SiPython className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("python")}
                </div>
                <div className="flex items-center">
                  <SiDjango className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("django")}
                </div>
              </div>
            </div>

            <div className="mb-6 ml-10 md:ml-4 md:mr-7">
              <h3 className="text-xl font-semibold mb-2">
                {i18n("infra_title")}
              </h3>
              <div className="ml-7 grid xs:grid-cols-3 sm:grid-cols-6 md:grid-cols-3 gap-x-4 md:gap-x-8 mb-2">
                <div className="flex items-center">
                  <SiAmazonaws className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("aws")}
                </div>
                <div className="flex items-center">
                  <SiNginx className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("nginx")}
                </div>
                <div className="flex items-center">
                  <SiApache className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("apache")}
                </div>
              </div>
              <div className="ml-7 grid xs:grid-cols-3 sm:grid-cols-6 md:grid-cols-3 gap-x-4 md:gap-x-8 mt-2">
                <div className="flex items-center">
                  <SiDocker className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("docker")}
                </div>
                <div className="flex items-center">
                  <SiLinux className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("linux")}
                </div>
                <div className="flex items-center">
                  <SiShell className="text-indigo-400 mr-2 flex-shrink-0" />
                  {neutral("bash")}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <span className="flex items-baseline">
                <FaBook className="text-indigo-400 inline-block mr-2" />
                <h3 className="text-2xl font-semibold mb-2 inline-block">
                  {i18n("lang_title")}
                </h3>
              </span>
              <ul>
                <li className="ml-10 md:ml-11 flex flex-row mb-3">
                  <span className="list-disc self-center mr-3">•</span>
                  <p>
                    {i18n("en")}
                    <br />
                    {i18n("en_fce")}
                    <br />
                    {i18n("en_course")}
                    <br />
                    {i18n("en_date")}
                  </p>
                </li>
                <li className="ml-10 md:ml-11 flex flex-row">
                  <span className="list-disc self-center mr-3">•</span>
                  <p>
                    {i18n("fr")}
                    <br />
                    {i18n("fr_exchange")}
                    <br />
                    {i18n("fr_course")}
                    <br />
                    {i18n("fr_date")}
                  </p>
                </li>
              </ul>
            </div>
          </aside>
          <section
            className={`col-span-12 pl-5 mb-14 md:mb-7 md:ml-5 md:col-span-7 lg:col-span-4 2xl:col-span-3 mt-2 text-neutral-750 w-full ${a4PrintPageClass}`}
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{i18n("exp_title")}</h2>

              <div className="ml-3">
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <span className="-ml-2 mr-3 xs:mr-5">
                      <FaBriefcase className="text-indigo-400" />
                    </span>
                    <div className="my-2 w-10/12 md:max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-xl">
                      <span className="flex justify-between items-center md:w-[26rem] lg:w-[28rem] xl:w-[40rem] 2xl:w-[46rem] pb-1 mb-1 border-b-2 border-purple-200 border-solid">
                        <h3 className="text-xl font-semibold">
                          {neutral("zenbit")}
                        </h3>
                        <p className="text-md">{i18n("zenbit_date")}</p>
                      </span>
                      <p className="text-md">{i18n("zenbit_specialization")}</p>

                      <p className="text-md">{i18n("zenbit_location")}</p>

                      <ul className="list-disc ml-4">
                        <li>
                          <p className="text-md">{i18n("zenbit_infra")}</p>
                        </li>
                        <li>
                          <p className="text-md">{i18n("zenbit_johnson")}</p>
                        </li>
                        <li>
                          <p className="text-md">{i18n("zenbit_audi")}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <span className="-ml-2 mr-3 xs:mr-5">
                      <FaBriefcase className="text-indigo-400" />
                    </span>

                    <div className="w-10/12 md:max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-xl ">
                      <span className="flex justify-between items-center md:w-[26rem] lg:w-[28rem] xl:w-[40rem] 2xl:w-[46rem] pb-1 mb-1 border-b-2 border-purple-200 border-solid">
                        <h3 className="text-xl font-semibold">
                          {neutral("redfox")}
                        </h3>
                        <p className="text-md">{i18n("redfox_date")}</p>
                      </span>

                      <p className="text-md">{i18n("redfox_specialization")}</p>
                      <p className="text-md">{i18n("redfox_location")}</p>
                      <ul className="list-disc ml-4">
                        <li>
                          <p className="text-md">{i18n("redfox_alper")}</p>
                        </li>
                        <li>
                          <p className="text-md">{i18n("redfox_gohealth")}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex items-center mb-2">
                  <span className="-ml-2 mr-3 xs:mr-5">
                    <FaBriefcase className="text-indigo-400" />
                  </span>

                  <div className="w-10/12 md:max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-xl ">
                    <span className="flex justify-between items-center md:w-[26rem] lg:w-[28rem] xl:w-[40rem] 2xl:w-[46rem] pb-1 mb-1 border-b-2 border-purple-200 border-solid">
                      <h3 className="text-xl font-semibold">YouSendr</h3>
                      <p className="text-md">{i18n("yousendr_date")}</p>
                    </span>
                    <p className="text-md">{i18n("yousendr_specialization")}</p>

                    <p className="text-md">{i18n("yousendr_location")}</p>

                    <ul className="list-disc ml-4">
                      <li>
                        <p className="text-md">{i18n("yousendr_bulkmail")}</p>
                      </li>
                      <li>
                        <p className="text-md">{i18n("yousendr-events")}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="xs:ml-2 pl-1 pr-1.5 xs:pr-0">
              <h2 className="text-2xl font-bold mb-5 md:-ml-3">
                {i18n("edu_title")}
              </h2>
              <div className="mb-4 ml-7 md:w-[26rem] lg:w-[28rem] xl:w-[40rem] 2xl:w-[46rem] w-10/12">
                <div className="flex items-center mb-1 pb-1 border-b-2 border-purple-200 border-solid md:w-full">
                  <span className="mr-2">
                    <FaGraduationCap className="text-indigo-400" />
                  </span>
                  <span className="flex justify-between items-center w-full">
                    <p className="font-semibold text-lg">{neutral("senai")}</p>
                    <p className="text-md">{neutral("senai_date")}</p>
                  </span>
                </div>
                <p className="text-md">{i18n("senai_specialization")}</p>
                <p className="text-md ml-1">
                  <b>-</b> {i18n("senai_lego_walle_site")}
                  <br />
                  <b>-</b> {i18n("senai_lego_walle")}
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-7 mb-5">
              {i18n("projects_title")}
            </h2>
            <div className="w-full break-words">
              <ul className="list-disc space-y-2 pl-14">
                <li className="mb-2">
                  <p className="text-md flex-row flex items-center">
                    {i18n("freelance_frei")}
                  </p>
                  <a
                    className="text-sky-800 underline"
                    href={links("freiRuiLink")}
                  >
                    {links("freiRuiLink")}
                  </a>
                </li>
                <li className="my-2">
                  <p className="text-md flex-row flex items-center">
                    {i18n("freelance_box")}
                  </p>
                  <a
                    className="text-sky-800 underline"
                    href={links("box911Link")}
                  >
                    {links("box911Link")}
                  </a>
                </li>
                <li className="mb-2">
                  <p className="text-md flex-row flex items-center">
                    {i18n("projects_so")}
                    <br />
                  </p>
                  <a className="text-sky-800 underline" href={links("soLink")}>
                    {links("soLink")}
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <LanguageSelect />
        </div>
      </div>
    </>
  );
};

export default Curriculum;
