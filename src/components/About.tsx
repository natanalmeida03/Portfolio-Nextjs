import Link from "next/link";

function About() {
  return (
    <section id="about" className="pb-11 pt-20 bg-bk4 dark:bg-bk2">
      <div className="mx-auto max-w-5xl">
      <Link href="#about"><h2 className="font-bold text-4xl text-pk dark:text-white mb-10 pl-4 md:pr-0">{'About'}</h2></Link>
        <p className="text-xl max-w-3xl text-black dark:text-white pl-4 md:pr-0">
          { "I'm Natan, a Software Engineering student at UnB with experience in software development and a strong interest in building efficient and well structured solutions. I am constantly seeking to deepen my technical knowledge, improve my skills, and stay up to date with modern development practices. I enjoy solving problems, learning new technologies, and contributing to projects that create real value."}
        </p>
      </div>
    </section>
  );
}

export default About;
