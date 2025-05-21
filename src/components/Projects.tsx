'use client';
import ProjectCard from "./ProjectCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

function Projects() {
  const projects = [
    {
      title: "Calculus",
      image: "/calculus.png",
      link: "https://github.com/fga-eps-mds/2024.1-CALCULUS-Frontend",
      linguagens: [
        "ReactJs",
        "NextJs",
        "Typescript",
        "TailWindCSS",
      ],
    },
    {
      title: "Pokedex",
      image: "/pokedex.PNG",
      link: "https://github.com/NATANGOATOSO/Pokedex",
      linguagens: ["JavaScript"],
    },
    {
      title: "Pixel Art App",
      image: "/pixelartsite.png",
      link: "https://github.com/NATANGOATOSO/pixelart-app",
      linguagens: ["JavaScript"],
    },
    {
      title: "Chat App",
      image: "/chatapp.png",
      link: "",
      linguagens: ["ReactJs", "Typescript", "Firebase"],
    },
    {
      title: "Cronometro Online",
      image: "/timer.PNG",
      link: "https://github.com/NATANGOATOSO/cronometro/",
      linguagens: ["JavaScript"],
    },
    {
      title: "Jokenpo",
      image: "/jokenpo.PNG",
      link: "https://github.com/NATANGOATOSO/pedrapapeltesoura",
      linguagens: ["JavaScript"],
    },
    {
      title: "Meu Portfólio",
      image: "/portifolio.png",
      link: "https://natan.vercel.app",
      linguagens: ["Typescript", "ReactJs", "NextJs"],
    },
    {
      title: "Bloom - APP de rotinas",
      image: "/default.png",
      link: "https://github.com/cerejeiros/bloom",
      linguagens: ["Typescript", "React native", "Supabase"],
    },
    {
      title: "Legends Brazilian",
      image: "/default.png",
      link: "https://github.com/LegendsBrazilian/LegendsBrazilian",
      linguagens: ["Python"],
    },
    {
      title: "Unimancer",
      image: "/default.png",
      link: "https://github.com/SBD1/2024.2-unimancer",
      linguagens: ["Python", "PostgreSQL"],
    },
  ];

  const allTools = Array.from(
    new Set(projects.flatMap((p) => p.linguagens))
  );

  const [selectedTool, setSelectedTool] = useState<string>("");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = selectedTool
    ? projects.filter((p) => p.linguagens.includes(selectedTool))
    : projects;

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 9);

  const responsive = {
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section id="projects" className="pb-11 pt-20 bg-bk3">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-bold text-4xl text-pk mb-10 pl-4 md:pr-0">
          {'// projetos'}
        </h1>
        <div className="mb-6 px-4">
          {allTools.map((tool) => (
            <span
              key={tool}
              className={`hover:bg-bk4 inline-block bg-bk3 text-black rounded-md px-2 py-1 mr-2 mb-2 cursor-pointer ${
                selectedTool === tool ? "bg-bk4 font-semibold" : ""
              }`}
              onClick={() => {
                if (selectedTool === tool) {
                  setSelectedTool("");
                  return;
                }
                setSelectedTool(tool);
              }}
            >
              {tool}
            </span>
          ))}
        </div>
        <ul className="hidden lg:flex flex-wrap gap-5 gap-y-4">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
              link={project.link}
              linguagens={project.linguagens}
            />
          ))}
        </ul>
        <div className="lg:hidden px-4 z-[1]">
          <Carousel responsive={responsive} ssr={false}>
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                image={project.image}
                link={project.link}
                linguagens={project.linguagens}
              />
            ))}
          </Carousel>
        </div>
        {filteredProjects.length > 9 && (
          <div className="flex justify-center mt-6">
            <button
              className="bg-yll text-black px-4 py-2 rounded font-semibold hover:bg-yll/80 transition"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Mostrar menos" : "Mostrar mais"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;