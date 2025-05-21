"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <div className="bg-bk3/50 h-16 fixed w-full z-50">
      <nav className="bg-bk3/50 flex max-w-5xl mx-auto justify-between h-16 items-center backdrop-blur-sm">
        <Link href="#start">
          <h1 className="text-4xl font-bold text-yll flex-1 md:pr-0">natan</h1>
        </Link>
        <ul className="hidden md:flex flex-1 justify-end gap-2 text-yll ">
          <li className="mx-5 py-1 relative group overflow-hidden">
            <Link href="#about" className="text-yll relative z-10 font-semibold">
              Sobre mim
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yll transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="mx-5 py-1 relative group overflow-hidden">
            <Link href="#projects" className="text-yll relative z-10 font-semibold ">
              Projetos
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yll transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="mx-5 py-1 relative group overflow-hidden">
            <Link href="#know" className="text-yll relative z-10 font-semibold">
              Conhecimentos
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yll transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
        <div className="block md:hidden pr-4">
          {menuOpen === true ? (
            <Image
              src="/close.png"
              alt="menu"
              width={25}
              height={25}
              onClick={toggleMenu}
            />
          ) : (
            <Image
              src="/burger-bar.png"
              alt="menu"
              width={32}
              height={32}
              onClick={toggleMenu}
            />
          )}
        </div>
      </nav>
      {menuOpen === true ? (
        <div className="fixed h-screen w-64 bg-bk3 z-[-1] left-0 top-0 pt-14 pl-4">
          <ul className="flex flex-1 flex-col justify-end gap-2 text-yll ">
            <li className="py-1 text-3xl bold">
              <Link href="#about">Sobre mim</Link>
            </li>
            <li className="py-1 text-3xl bold">
              <Link href="#projects">projetos</Link>
            </li>
            <li className="py-1 text-3xl bold">
              <Link href="#know">conhecimentos</Link>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default NavBar;
