function Footer() {
  return (
    <footer className="bg-bk4 dark:bg-bk2 h-44 text-center pt-6">
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
      <p className="text-black dark:text-white">© 2024 - presente</p>
      <p className="text-black dark:text-white">Feito com ❤️ por natan</p>
    </footer>
  );
}

export default Footer;
