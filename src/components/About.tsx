import Link from "next/link";

function About() {
  return (
    <section id="about" className="pb-11 pt-20 bg-bk4 dark:bg-bk2">
      <div className="mx-auto max-w-5xl">
      <Link href="#about"><h2 className="font-bold text-4xl text-pk dark:text-white mb-10 pl-4 md:pr-0">{'About'}</h2></Link>
        <p className="text-xl max-w-3xl text-black dark:text-white pl-4 md:pr-0">
          { "I'm Natan, software engineer student from UnB. I'm looking for my first opportunity in the market as a developer. Always seeking new knowledge and improving my skills."}
        </p>
      </div>
    </section>
  );
}

export default About;
