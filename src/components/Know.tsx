import KnowCard from "./KnowCard";

function Know() {
  return (
    <section id="know" className="pb-11 pt-20 bg-bk2">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-bold text-4xl text-pk mb-10 pl-4 md:pr-0">Conhecimentos</h1>
        <ul className="flex flex-wrap gap-2 md:gap-10 justify-center md:justify-start">
          <KnowCard title="C++" image="/c-.png" />
          <KnowCard title="Javascript" image="/js.png" />
          <KnowCard title="HTML" image="/html.png" />
          <KnowCard title="CSS" image="/css-3.png" />
          <KnowCard title="Python" image="/python.png" />
          <KnowCard title="github" image="/github.png" />
          <KnowCard title="ReactJs" image="/react.png" />
        </ul>
      </div>
    </section>
  );
}

export default Know;
