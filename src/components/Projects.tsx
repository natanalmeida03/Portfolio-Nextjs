import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="Projects" className="py-11 bg-bk1">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-bold text-4xl text-pk mb-10">Projetos</h1>
        <ul className="flex flex-wrap gap-10 justify-center xl:justify-between">
          <ProjectCard
            title="Cronometro Online"
            image="/timer.PNG"
            link="https://github.com/NATANGOATOSO/cronometro/"
            linguagens={["HTML", "CSS", "JavaScript"]}
          />
          <ProjectCard
            title="Jokenpo"
            image="/timer.PNG"
            link="https://github.com/NATANGOATOSO/cronometro/"
            linguagens={["HTML", "CSS", "JavaScript"]}
          />
          <ProjectCard
            title="Meu Portfólio"
            image="/timer.PNG"
            link="https://github.com/NATANGOATOSO/cronometro/"
            linguagens={["Typescript", "ReactJs", "NextJs", "HTML", "CSS"]}
          />
          <ProjectCard
            title="Bloom - APP de rotinas"
            image="/timer.PNG"
            link="https://github.com/NATANGOATOSO/cronometro/"
            linguagens={["Typescript", "React native"]}
          />
          <ProjectCard
            title="Legends Brazilian"
            image="/timer.PNG"
            link="https://github.com/NATANGOATOSO/cronometro/"
            linguagens={["Python"]}
          />
          <ProjectCard
            title="Calculus"
            image="/timer.PNG"
            link="https://github.com/NATANGOATOSO/cronometro/"
            linguagens={["ReactJs", "NextJs", "HTML", "CSS", "NestJs", "TypeScript"]}
          />
          <ProjectCard
            title="Pokedex"
            image="/timer.PNG"
            link="https://github.com/NATANGOATOSO/cronometro/"
            linguagens={["HTML", "CSS", "JavaScript"]}
          />
        </ul>
      </div>
    </section>
  );
}

export default Projects;
