function Footer() {
  return (
    <footer className="bg-bk2 h-44 text-center pt-6">
      <div className="flex gap-5 w-fit mx-auto h-11 mb-6">
        <a href="https://github.com/natangoatoso" target="_blank">
          <img src="/github_c.png" alt="github" className="h-full invert filter" />
        </a>
        <a href="https://www.linkedin.com/in/natan-almeida-42b22728a/" target="_blank">
          <img src="/linkedin.png" alt="" className="h-full invert filter" />
        </a>
        <a href="https://https//x.com/NatanGoatoso" target="_blank">
          <img src="/twitter.png" alt="" className="h-full invert filter" />
        </a>
      </div>
      <p className="text-white">© 2024 - 2025</p>
      <p className="text-white">Feito com ❤️ por natan</p>
    </footer>
  );
}

export default Footer;
