import Link from "next/link";

function NavBar() {
  return (
    <div className="bg-bk1/50 h-16 fixed w-full">
      <nav className="bg-bk1/50 flex max-w-6xl mx-auto justify-between h-16 items-center backdrop-blur-sm">
        <Link href="#start">
          <h1 className="text-4xl font-bold text-yll flex-1">natan</h1>
        </Link>
        <ul className="flex flex-1 justify-end gap-2 text-yll ">
          <li className="mx-5 py-1 border-b-2 border-b-bk1 hover:border-b-yll active:border-b-yll">
            <Link href="#about">Sobre mim</Link>
          </li>
          <li className="mx-5 py-1 border-b-2 border-b-bk1 hover:border-b-yll active:border-b-yll">
            <Link href="#projects">projetos</Link>
          </li>
          <li className="mx-5 py-1 border-b-2 border-b-bk1 hover:border-b-yll active:border-b-yll">
            <Link href="#know">conhecimentos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
