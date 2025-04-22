'use client';
import ProjectCard from "./ProjectCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Projects() {
  const projects = [
    {
      title: "Calculus",
      image: "/calculus.png",
      link: "https://github.com/fga-eps-mds/2024.1-CALCULUS-Frontend",
      linguagens: [
        "ReactJs",
        "NextJs",
        "HTML",
        "CSS",
        "TypeScript",
        "TailWindCSS",
      ],
    },
    {
      title: "Pokedex",
      image: "/pokedex.PNG",
      link: "https://github.com/NATANGOATOSO/Pokedex",
      linguagens: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Pixel Art App",
      image: "/pixelartsite.png",
      link: "https://github.com/NATANGOATOSO/pixelart-app",
      linguagens: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Chat App",
      image: "/chatapp.png",
      link: "",
      linguagens: ["ReactJs", "HTML", "CSS", "TypeScript"],
    },
    {
      title: "Cronometro Online",
      image: "/timer.PNG",
      link: "https://github.com/NATANGOATOSO/cronometro/",
      linguagens: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Jokenpo",
      image: "/jokenpo.PNG",
      link: "https://github.com/NATANGOATOSO/pedrapapeltesoura",
      linguagens: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Meu Portfólio",
      image: "/portifolio.png",
      link: "https://natan.vercel.app",
      linguagens: ["Typescript", "ReactJs", "NextJs", "HTML", "CSS"],
    },
    {
      title: "Bloom - APP de rotinas",
      image: "/timer.PNG",
      link: "https://github.com/cerejeiros/bloom",
      linguagens: ["Typescript", "React native", "Supabase"],
    },
    {
      title: "Legends Brazilian",
      image: "/timer.PNG",
      link: "https://github.com/LegendsBrazilian/LegendsBrazilian",
      linguagens: ["Python"],
    },
  ];

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
    <section id="projects" className="pb-11 pt-20 bg-bk1">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-bold text-4xl text-pk mb-10 pl-4 md:pr-0">
          Projetos
        </h1>
        <ul className="hidden lg:flex flex-wrap gap-10 justify-center xl:justify-between">
          {projects.map((project) => (
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
          <Carousel responsive={responsive} ssr={false} >
            {projects.map((project) => (
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
      </div>
    </section>
  );
}

export default Projects;
