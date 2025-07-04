import KnowCard from "./KnowCard";
import Link from "next/link";

function Know() {
  return (
    <section id="know" className="pb-11 pt-20 bg-bk4 dark:bg-bk2">
      <div className="mx-auto max-w-5xl">
      <Link href="#know"><h1 className="font-bold text-4xl text-pk dark:text-white mb-10 pl-4 md:pr-0">{'Skills'}</h1></Link>
        <ul className="flex flex-wrap gap-4 md:gap-10 justify-center items-center">
          <KnowCard title="C++" image="/c-.png" />
          <KnowCard title="Javascript" image="/js.png" />
          <KnowCard title="HTML" image="/html.png" />
          <KnowCard title="CSS" image="/css-3.png" />
          <KnowCard title="Python" image="/python.png" />
          <KnowCard title="github" image="/github.png" />
          <KnowCard title="React" image="/react.png" />
          <KnowCard title="NodeJs" image="/Nodejs.png" />
          <KnowCard title="NextJs" image="/Nextjs.png" />
        </ul>
      </div>
    </section>
  );
}

export default Know;
