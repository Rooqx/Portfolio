import { useState, useEffect, useRef } from "react";
import img from "../assets/stok.png";
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";
import ts from "../assets/icons/typescript.png";
import vercel from "../assets/icons/vercel.svg";
import git from "../assets/icons/social.png";
import github from "../assets/github.png";
import ex from "../assets/icons/icons8-express-js.svg";
import sql from "../assets/icons/icons8-mysql-logo.svg";
import linux from "../assets/icons/icons8-linux-48.png";
import docker from "../assets/icons/icons8-docker.svg";
import mongodb from "../assets/icons/icons8-mongodb-48.png";
import aws from "../assets/icons/icons8-aws.svg";
import postgresql from "../assets/icons/icons8-postgresql.svg";
import redux from "../assets/icons/icons8-redux.svg";
import node from "../assets/icons/icons8-nodejs.svg";
import next from "../assets/icons/icons8-nextjs.svg";
import framer from "../assets/icons/icons8-framer-48.png";
import figma from "../assets/icons/figma.png";
import react from "../assets/icons/library.png";
import js from "../assets/icons/icons8-javascript.svg";
import html from "../assets/icons/icons8-html5.svg";
import tailwind from "../assets/icons/icons8-tailwindcss.svg";
import cloudflare from "../assets/icons/icons8-cloudflare-48.png";
import firebase from "../assets/icons/icons8-firebase.svg";
import shopify from "../assets/icons/icons8-shopify.svg";
import css from "../assets/icons/icons8-css.svg";
import arrow from "../assets/icons8-right-50.png";
import zipzen from "../assets/Projects/zipzen.png";
import zenith from "../assets/Projects/zenith.png";
import codeInsight from "../assets/Projects/codeInsight.png";
import starforge from "../assets/Projects/starforge.png";
import message from "../assets/email.png";
import whatsapp from "../assets/icons8-whatsapp.svg";

export default function Home() {
  const roles = ["FullStack", "Frontend", "Backend"];
  const [currentRole, setCurrentRole] = useState(0);
  const [fade, setFade] = useState(false);
  const [vantaEffect, setVantaEffect] = useState(null); // Add this line
  const haloRef = useRef(null);
  const frontend = [
    { content: "HTML", img: html },
    { content: "CSS", img: css },
    { content: "JavaScript", img: js },
    { content: "TypeScript", img: ts },
    { content: "Tailwind", img: tailwind },
    { content: "Figma", img: figma },
    { content: "Framer", img: framer },
    { content: "ReactJs", img: react },
    { content: "Redux", img: redux },
  ];

  const backend = [
    { content: "ExpressJs", img: ex },
    { content: "NextJs", img: next },
    { content: "SQL", img: sql },
    { content: "PostgreSQL", img: postgresql },
    { content: "NodeJs", img: node },
    { content: "MongoDb", img: mongodb },
    /* { content: "Mongosse", img: "framer" },
    { content: "Prisma", img: "prisma" },
    { content: "Redux", img: "redux" },*/
  ];
  const rotatedBackend = [
    backend[backend.length - 1],
    ...backend.slice(0, backend.length - 1),
  ];
  const others = [
    { content: "AWS", img: aws },
    { content: "Docker", img: docker },
    { content: "Git", img: git },
    { content: "gitHub", img: github },
    { content: "vercel", img: vercel },
    { content: "FireBase", img: firebase },
    { content: "Cloudflare", img: cloudflare },
    { content: "Shopify", img: shopify },
    { content: "Linux", img: linux },
  ];

  const projects = [
    {
      name: "Zenith Academy",
      img: zenith,
      description:
        "Details: Full-stack interactive EdTech platform enabling learning through engaging content, secure auth, seamless payments, and rich media management. ",
      techStack: [
        { content: "HTML", img: html },
        { content: "CSS", img: css },
        { content: "TailwindCss", img: tailwind },
        { content: "TypeScript", img: ts },
        { content: "JavaScript", img: js },
        { content: "ReactJs", img: react },
        { content: "ExpressJs", img: ex },
        { content: "MongoDb", img: mongodb },
        { content: "Framer-Motion", img: framer },
        { content: "AWS", img: aws },
      ],
      repoLink: "https://github.com/Rooqx/Zenith",
      Preview: "https://zenith-acad.vercel.app/",
    },
    {
      name: "StarForge",
      img: starforge,
      description:
        "Details: An AI SaaS landing page showcasing modern UI/UX excellence. With sleek design and smooth animations, it delivers an engaging user experience and serves as an inspiring reference for developers and designers.",

      techStack: [
        { content: "HTML", img: html },
        { content: "CSS", img: css },
        { content: "TailwindCss", img: tailwind },
        { content: "TypeScript", img: ts },
        { content: "JavaScript", img: js },
        { content: "ReactJs", img: react },
        { content: "NextJs", img: next },
      ],
      repoLink: "https://github.com/Rooqx/StarForge",
      Preview: "https://ai-saas-landing-starter.vercel.app/",
    },
    {
      name: "ZipZen",
      img: zipzen,
      description:
        "Details: A modern cloud storage solution designed to leverage the full power of any device. With focus on speed, accessibility and seamless synchronization, ZipZen offers an intuitive platform for storing, managing, and retrieving files across all your devices.",
      techStack: [
        { content: "HTML", img: html },
        { content: "CSS", img: css },
        { content: "TailwindCss", img: tailwind },
        { content: "TypeScript", img: ts },
        { content: "JavaScript", img: js },
        { content: "ReactJs", img: react },
        { content: "ExpressJs", img: ex },
        { content: "Postgresql", img: postgresql },
        { content: "Figma", img: figma },
      ],
      repoLink: "https://github.com/Rooqx/ZipZen",
      Preview: "http://zipzen.netlify.app/",
    },
    {
      name: "CodeInsight AI",
      img: codeInsight,
      description:
        "Details:Collaborated on an open source project and created an AI-powered developer tool that analyzes, explains, and optimizes code in real time. Designed to accelerate debugging and learning, it provides instant feedback, smart suggestions and context aware documentation turning complex syntax into clear insights",
      techStack: [
        { content: "HTML", img: html },
        { content: "CSS", img: css },
        { content: "TailwindCss", img: tailwind },
        { content: "TypeScript", img: ts },
        { content: "JavaScript", img: js },
        { content: "ReactJs", img: react },
        { content: "ExpressJs", img: ex },
        { content: "SQL", img: sql },
      ],
      repoLink: "https://github.com/Rooqx/CodeInsight-Ai",
      Preview: "https://codeinsight-ai.vercel.app/",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setFade(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  });
  useEffect(() => {
    console.log("haloRef.current:", haloRef.current); // Debug log
    if (!vantaEffect && haloRef.current) {
      const haloInstance = HALO({
        el: haloRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        xOffset: 0.05,
        yOffset: 0.1, // lowered offset for testing
      });
      console.log("HALO instance initialized:", haloInstance);
      setVantaEffect(haloInstance);
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []); // empty dependency array

  return (
    <main className="overflow-hidden text-white">
      <section
        id="home"
        ref={haloRef}
        className="relative flex bg-black flex-col backend-center px-2 py-10 h-[79vh] md:h-[90vh]"
      >
        <div className="bg-[#0000003b] backdrop-blur-md w-full h-full absolute top-0 bottom-0 z-[1] left-0"></div>
        <div className="flex items-center justify-center w-full">
          <div className="p-[1px] rounded-3xl relative bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent animate-[shine_6s_linear_infinite] bg-[length:200%_100%] flex justify-center items-center w-[70%]">
            <div className="bg-transparent py-2 md:py-2 md:px-8 px-5 rounded-3xl text-[0.8rem] md:text-[1rem] flex justify-center items-center backend-center gap-2 shadow-[0_0_10px_rgb(67,67,67)] w-[fit-content]">
              <span className="inline-block w-2.5 h-2.5 -ml-2 bg-[#00ff88] rounded-full shadow-[0_0_10px_#00ff88] animate-[pulseAndBlink_2s_ease-in-out_infinite]"></span>{" "}
              Actively Seeking Job Opportunities
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full gap-3 px-5 py-2 mt-3 backend-center md:mt-8 ">
          <h1 className="text-2xl italic font-extrabold text-center w-full md:text-[2rem] md:w-[60%] leading-relaxed md:leading-loose">
            Hi <span className="inline-block animate-wave">👋</span>, i'm Farooq
            Ashiru, a{""}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
              style={{
                opacity: fade ? 0 : 1,
                transition: "opacity 0.5s ease",
                display: "inline-block",
                minWidth: "120px",
              }}
            >
              {roles[currentRole]}
            </span>{" "}
            Developer, Problem Solver & a Tech Enthusiast
          </h1>
          <p className="text-[0.8rem] text-center md:text-[1rem] mt-2">
            i build <strong>scalable, responsive and user-friendly</strong> web
            applications with modern technologies. With expertise in both
            <strong> frontend & backend development,</strong> i turn ideas into
            seamless digital experiences
          </p>
          <div className="flex flex-wrap justify-center w-full gap-3 mt-5 backend-center">
            <a
              href="https://wa.me/2348064393200"
              className="w-full border-[3px] border-[rgb(67,67,67)] rounded-3xl py-2 px-4 shadow-[0_0_10px_rgb(67,67,67)] hover:shadow-[0_0_15px_rgb(90,90,90)] transition-all p-[1px]  bg-gradient-to-l from-transparent via-[rgba(29,4,174,0.5)] to-transparent animate-[shine_3s_linear_infinite] bg-[length:200%_100%] active:scale-105 hover:scale-105 flex justify-center backend-center font-bold relative"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let Connect
              <div className="w-[30px] h-[30px] rounded-full bg-white absolute right-1.5 bottom-1.5 flex items-center justify-center">
                <img src={arrow} className="w-[1.5rem] " alt="" />
              </div>
            </a>
            <a
              href="https://drive.google.com/file/d/1wUoo-x3d37UlBt4Vx1qi1ObDtmhchzrh/view?usp=drive_link"
              className="w-full flex justify-center backend-center border-[3px] border-[rgb(67,67,67)] rounded-3xl py-2 px-4 shadow-[0_0_10px_rgb(67,67,67)] hover:shadow-[0_0_15px_rgb(90,90,90)] transition-all p-[1px] relative bg-gradient-to-r from-transparent via-[rgba(95,5,239,0.5)] to-transparent animate-[shine_6s_linear_infinite] bg-[length:200%_100%] active:105 hover:scale-105 font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 mt-5 text-white w-full z-[1] left-0">
          <img
            src={img}
            className="w-full md:h-[200px] "
            loading="lazy"
            alt=""
          />
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="flex flex-col border border-[rgb(67,67,67)] rounded-3xl bg-[#161616] px-5 md:p-10 shadow-[0_0_10px_rgb(67,67,67)]">
          <p className="py-5 mb-5 text-xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 animate-gradient">
            My Tech Stack
          </p>

          <div className="flex flex-col -space-y-10">
            {/* Row 1 - slides left */}
            <div className="overflow-hidden" style={{ height: "100px" }}>
              <div
                className="flex gap-2 animate-endlessSlideLeft"
                style={{ animationDuration: "20s" }}
              >
                {frontend.concat(frontend).map((item, i) => (
                  <div
                    key={i}
                    className=" flex  font-normal text-[#b9b7b7] flex-shrink-0 justify-center text-[0.8rem] items-center border border-[#343434] bg-[#080808] rounded-xl shadow-[inset_2px_3px_10px_rgba(67,67,67,0.5),_0_0_5px_rgba(67,67,67,0.8)] p-4 py-2 px-4 gap-2"
                  >
                    <img src={item.img} className="w-[1rem]" alt={item.img} />{" "}
                    <p> {item.content}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Row 2 - slides right */}
            <div className="overflow-hidden" style={{ height: "100px" }}>
              <div
                className="flex gap-2 animate-endlessSlideRight whitespace-nowrap"
                style={{ animationDuration: "25s" }}
              >
                {rotatedBackend.concat(rotatedBackend).map((item, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 flex items-center justify-end text-[0.8rem] font-normal text-[#b9b7b7] border border-[#343434] bg-[#080808] rounded-xl shadow-[inset_2px_3px_10px_rgba(67,67,67,0.5),_0_0_5px_rgba(67,67,67,0.8)] p-4 py-2 px-4 gap-2"
                  >
                    <img src={item.img} className="w-[1rem]" alt={item.img} />{" "}
                    <p>{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Row 3 - slides left (opposite of row 2) */}
            <div className="overflow-hidden" style={{ height: "100px" }}>
              <div
                className="flex gap-2 animate-endlessSlideLeft "
                style={{ animationDuration: "20s" }}
              >
                {others.concat(others).map((item, i) => (
                  <div
                    key={i}
                    className=" flex  font-normal text-[#b9b7b7] flex-shrink-0 justify-center text-[0.8rem] items-center border border-[#343434] bg-[#080808] rounded-xl shadow-[inset_2px_3px_10px_rgba(67,67,67,0.5),_0_0_5px_rgba(67,67,67,0.8)] p-4 py-2 px-4 gap-2"
                  >
                    <img src={item.img} className="w-[1rem]" alt={item.img} />{" "}
                    <p> {item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-5 -mt-5" id="about">
        <div className="flex flex-col items-center justify-center w-full gap-5 px-5 py-10 border border-[rgb(67,67,67)] rounded-3xl bg-[#161616] shadow-[0_0_10px_rgb(67,67,67)]">
          <div className="mb-5 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 animate-gradient">
            About Me
          </div>
          <div className="text-[0.85rem] md:text-[1.2rem] text-[#b9b7b7] w-full">
            i'm a passionate developer with a keen interest in creating
            innovative solutions. With a strong foundation in both frontend and
            backend technologies, I thrive on building scalable and
            user-friendly web applications. My journey in tech has been driven
            by a desire to solve real-world problems and deliver exceptional
            user experiences. I enjoy collaborating with teams to bring ideas to
            life and continuously learning new technologies to stay at the
            forefront of the ever-evolving tech landscape. Whether it's crafting
            elegant user interfaces or designing robust backend systems, I
            approach every project with enthusiasm and a commitment to
            excellence. Let's connect and explore how we can create impactful
            digital experiences together!
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-5 px-5 py-8 border border-[rgb(67,67,67)] rounded-3xl bg-[#161616] shadow-[0_0_10px_rgb(67,67,67)]">
            <p className="font-extrabold ">Work Experience</p>
            <div className="text-[#b9b7b7] text-[0.8rem] md:text-[1.2rem] flex flex-wrap">
              <p className="font-bold w-[50%]">KOBOLD AI</p>
              <p className="w-[50%] text-end">Dec 2021 - May 2022</p>
              <br />
              <p className="mt-2 w-[50%]">Front-End Developer</p>
              <p className="mt-2 w-[50%] text-end">Remote</p>
              <br />
              <p className="mt-1 border-l-4 border-[rgb(209,208,208)] pl-2 lg:mt-2">
                Improved website performance, increasing mobile traffic by 10%
              </p>
              <br />
              <p className="-mt-2 border-l-4 border-[rgb(209,208,208)] pl-2 lg:mt-2">
                Integrated RESTful APIs with frontend systems for seamless data
                flow and real-time updates
              </p>
              <br />
              <p className="-mt-2 border-l-4 border-[rgb(209,208,208)] p-2 lg:mt-2">
                Collaborated with UI/UX designers to deliver a pixel perfect and
                accessible interface
              </p>
            </div>
            <div className="text-[#b9b7b7] text-[0.8rem] md:text-[1.2rem] flex flex-wrap mt-2">
              <p className="font-bold w-[50%]">MK Store </p>
              <p className="w-[50%] text-end">Nov 2023 - Nov 2024</p>
              <br />
              <p className="mt-2 w-[50%]">Full-Stack Developer</p>
              <p className="mt-2 w-[50%] text-end">Onsite</p>
              <br />
              <p className="mt-1 border-l-4 border-[rgb(209,208,208)] pl-2">
                Developed custom checkout flows with fraud detection (Paystack
                integration) reducing payment faliues by 25%
              </p>
              <br />
              <p className="-mt-2 md:mt-2 border-l-4 border-[rgb(209,208,208)] pl-2">
                Automated personalized EMAIL/SMS campaigns using Upstash
                integration, increasing customer engagement by 30%
              </p>
              <br />
              <p className="-mt-2 lg:mt-2 border-l-4 border-[rgb(209,208,208)] pl-2">
                Collaborated with UI/UX designers to deliver a pixel perfect and
                accessible interface
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-10" id="projects">
        <div className="flex flex-wrap items-center justify-center w-full">
          <p className="w-full text-center">EXPLORE MY CREATIONS</p>
          <p className="w-full text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 animate-gradient">
            Projects
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center w-full gap-3 px-5 mt-10">
          {projects.map((project, index) => (
            <div
              className="flex flex-col items-center justify-center w-full gap-5 px-5 py-10 border border-[rgb(67,67,67)] rounded-3xl bg-[#161616] shadow-[0_0_10px_rgb(67,67,67)]"
              key={index}
            >
              <p className="w-full font-extrabold text-start">{project.name}</p>
              <p className="text-[#b9b7b7] ">{project.description}</p>
              <div className="w-[100%] h-[250px] lg:h-[450px] bg-[#1f1f1f] rounded-xl relative overflow-hidden">
                <img
                  src={project.img}
                  loading="lazy"
                  alt={project.name}
                  className="object-cover w-full h-full"
                />
                <div className="w-full h-[30%] blur-[30px]  absolute bottom-0 bg-black">
                  {" "}
                </div>
                <span className="absolute flex gap-2 bottom-5 right-5 ">
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.8rem] py-2 px-4 border border-[#525151] rounded-3xl bg-[#ffffff0a] transition-all duration-500 active:scale-110 hover:bg-[#ffffff3a] active:bg-[#ffffff3a] hover:scale-110 "
                  >
                    <img src={github} className="w-[20px]" alt="" />
                  </a>
                  <a
                    href={project.Preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.8rem] py-2 px-4 border border-[#525151] rounded-3xl bg-[#ffffff0a] transition-all duration-500 active:scale-110 hover:bg-[#ffffff3a] active:bg-[#ffffff3a] hover:scale-110 "
                  >
                    Live Demo
                  </a>
                </span>
              </div>
              {/* TECH STACK SECTION - FIXED */}
              <div className="flex flex-wrap w-full gap-2">
                <p className="w-full">Tech Stack Used:</p>

                {project.techStack.map((item, i) => (
                  <div
                    key={i}
                    className="flex font-normal text-[#b9b7b7] flex-shrink-0 justify-center text-[0.6rem] items-center border border-[#343434] bg-[#080808] rounded-xl shadow-[inset_2px_3px_10px_rgba(67,67,67,0.5),_0_0_5px_rgba(67,67,67,0.8)] p-4 py-2 px-4 gap-2"
                  >
                    <img
                      src={item.img}
                      className="w-[1rem]"
                      alt={item.content}
                    />{" "}
                    {/* Fixed alt text */}
                    <p>{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full px-5" id="contact">
        <div className="flex flex-wrap items-center justify-center w-full py-10">
          <p className="w-full text-center">GET IN TOUCH</p>
          <p className="w-full text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 animate-gradient ">
            Contact Me
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-5 px-5 py-10 border border-[rgb(67,67,67)] rounded-3xl bg-[#161616] shadow-[0_0_10px_rgb(67,67,67)] mb-10">
          <span className="flex items-center justify-center w-full gap-2 border border-[#a7a7a7] py-2 px-4 rounded-xl  no-underline">
            <img src={message} className="w-[16px]" alt="email" />
            ashfaga2005f@gmail.com
          </span>
          <a
            className="flex items-center justify-center w-full gap-2 border border-[#a7a7a7] py-2 px-4 rounded-xl  decoration-none"
            href="https://wa.me/2348064393200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={whatsapp} className="w-[16px]" alt="" />
            WhatsApp
          </a>
        </div>
      </section>
      <footer></footer>
    </main>
  );
}
