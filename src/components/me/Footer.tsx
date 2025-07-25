import { ArrowRight } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-bk4 dark:bg-bk2 pt-6 pb-6">
        <div className="mx-auto max-w-3xl px-6 flex items-center justify-between">
            <div className="flex gap-5 h-10">
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
            <div className="text-right">
                <p className="text-black dark:text-white">© 2024 - presente</p>
                <p className="text-black dark:text-white">Feito com ❤️ por natan</p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;