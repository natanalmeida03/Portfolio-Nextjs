import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="pb-11 pt-20 bg-bk1">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-bold text-4xl text-pk mb-10">Projetos</h1>
        <ul className="flex flex-wrap gap-10 justify-center xl:justify-between">
          <ProjectCard
            title="Calculus"
            image="/calculus.png"
            link="https://github.com/fga-eps-mds/2024.1-CALCULUS-Frontend"
            linguagens={[
              "ReactJs",
              "NextJs",
              "HTML",
              "CSS",
              "TypeScript",
              "TailWindCSS",
            ]}
          />
          <ProjectCard
            title="Pokedex"
            image="/pokedex.PNG"
            link="https://github.com/NATANGOATOSO/Pokedex"
            linguagens={["HTML", "CSS", "JavaScript"]}
          />
          <ProjectCard
            title="Pixel Art App"
            image="/pixelartsite.png"
            link="https://github.com/NATANGOATOSO/pixelart-app"
            linguagens={["HTML", "CSS", "JavaScript"]}
          />
          <ProjectCard
            title="Chat App"
            image="/chatapp.png"
            link="https://chatapp-natan.vercel.app"
            linguagens={["ReactJs", "HTML", "CSS", "TypeScript"]}
          />
          <ProjectCard
            title="Cronometro Online"
            image="/timer.PNG"
            link="https://github.com/NATANGOATOSO/cronometro/"
            linguagens={["HTML", "CSS", "JavaScript"]}
          />
          <ProjectCard
            title="Jokenpo"
            image="/jokenpo.PNG"
            link="https://github.com/NATANGOATOSO/pedrapapeltesoura"
            linguagens={["HTML", "CSS", "JavaScript"]}
          />
          <ProjectCard
            title="Meu Portfólio"
            image="/portifolio.png"
            link="https://github.com/NATANGOATOSO/Portfolio-Nextjs"
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
        </ul>
      </div>
    </section>
  );
}

export default Projects;
