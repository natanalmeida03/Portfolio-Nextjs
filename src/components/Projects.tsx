'use client';
import ProjectCard from "./ProjectCard";
import { useState, useEffect } from "react";
import Link from "next/link";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1024);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

function Projects() {
  const projects = [
    {
      title: "Calculus",
      image: "/calculus.png",
      link: "https://github.com/fga-eps-mds/2024.1-CALCULUS-Frontend",
      linguagens: [
        "Reactjs",
        "Nextjs",
        "Typescript",
        "Tailwindcss",
      ],
    },
    {
      title: "Pokedex",
      image: "/pokedex.PNG",
      link: "https://github.com/NATANGOATOSO/Pokedex",
      linguagens: ["Javascript"],
    },
    {
      title: "Pixel Art App",
      image: "/pixelartsite.png",
      link: "https://github.com/NATANGOATOSO/pixelart-app",
      linguagens: ["Javascript"],
    },
    {
      title: "Chat App",
      image: "/chatapp.png",
      link: "",
      linguagens: ["Reactjs", "Typescript", "Firebase"],
    },
    {
      title: "Stopwatch",
      image: "/timer.PNG",
      link: "https://github.com/NATANGOATOSO/cronometro/",
      linguagens: ["Javascript"],
    },
    {
      title: "Jokenpo",
      image: "/jokenpo.PNG",
      link: "https://github.com/NATANGOATOSO/pedrapapeltesoura",
      linguagens: ["Javascript"],
    },
    {
      title: "My personal website",
      image: "/portifolio.png",
      link: "https://natan.vercel.app",
      linguagens: ["Typescript", "Reactjs", "Nextjs", "Tailwindcss"],
    },
    {
      title: "Bloom - routines app",
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

  const isMobile = useIsMobile();
  const limit = isMobile ? 5 : 9;
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, limit);

  return (
    <section id="projects" className="pb-11 pt-20 bg-bk4 dark:bg-bk2">
      <div className="mx-auto max-w-5xl">
      <Link href="#projects"><h1 className="font-bold text-4xl text-pk dark:text-white mb-10 pl-4 md:pr-0">
          {'Projects'}
        </h1></Link>
        <div className="mb-6 px-4">
          {allTools.map((tool) => (
            <span
              key={tool}
              className={`hover:bg-bk4 inline-block bg-bk4 dark:bg-bk2 dark:hover:bg-bk2 text-black dark:text-white rounded-md px-2 py-1 mr-2 mb-2 cursor-pointer ${
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
        <ul className="flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap gap-5 gap-y-4">
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
        {filteredProjects.length > limit && (
          <div className="flex justify-center mt-6">
            <button
              className="bg-bk4 text-pk dark:bg-bk2 dark:text-white dark:hover:bg-white dark:hover:text-bk2 border px-4 py-2 rounded font-semibold hover:bg-pk hover:text-bk4 transition"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Show less" : "Show more"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;