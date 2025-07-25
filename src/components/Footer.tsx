import { ArrowRight } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-bk4 dark:bg-bk2 text-center pt-6 pb-6">
      <div className="flex gap-5 w-fit mx-auto h-10 mb-6">
        <a href="https://github.com/natanalmeida03" target="_blank" className="hover:-translate-y-2 dark:invert transition-all duration-300">
          <img src="/github_c.png" alt="github" className="h-full" />
        </a>
        <a href="https://www.linkedin.com/in/natan-almeida-42b22728a/" target="_blank" className="hover:-translate-y-2 dark:invert transition-all duration-300">
          <img src="/linkedin.png" alt="" className="h-full" />
        </a>
        <a href="https://x.com/NatanGoatoso" target="_blank" className="hover:-translate-y-2 dark:invert transition-all duration-300">
          <img src="/twitter.png" alt="" className="h-full" />
        </a>
      </div>
      <div>
        <p className="block"><a href="/me" className="text-black dark:text-white inline-flex items-center mt-6 px-4 py-2 bg-blue-600 rounded-xl hover:text-bk2 hover:dark:text-bk3"> See my personal blog <ArrowRight className="w-4 h-4 ml-2" /></a></p>
      </div>
      <br />
      <p className="text-black dark:text-white">© 2024 - presente</p>
      <p className="text-black dark:text-white">Feito com ❤️ por natan</p>

    </footer>
  );
}

export default Footer;
