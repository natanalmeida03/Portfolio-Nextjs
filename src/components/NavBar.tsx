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
    <div className="bg-bk1/50 h-16 fixed w-full">
      <nav className="bg-bk1/50 flex max-w-6xl mx-auto justify-between h-16 items-center backdrop-blur-sm">
        <Link href="#start">
          <h1 className="text-4xl font-bold text-yll flex-1">natan</h1>
        </Link>
        <ul className="hidden md:flex flex-1 justify-end gap-2 text-yll ">
          <li className="mx-5 py-1 border-b-2 border-b-transparent hover:border-b-yll active:border-b-yll">
            <Link href="#about">Sobre mim</Link>
          </li>
          <li className="mx-5 py-1 border-b-2 border-b-transparent hover:border-b-yll active:border-b-yll">
            <Link href="#projects">projetos</Link>
          </li>
          <li className="mx-5 py-1 border-b-2 border-b-transparent hover:border-b-yll active:border-b-yll">
            <Link href="#know">conhecimentos</Link>
          </li>
        </ul>
        <div className="block md:hidden pr-4">
          <Image
            src="/burger-bar.png"
            alt="menu"
            width={32}
            height={32}
            onClick={toggleMenu}
          />
        </div>
      </nav>
      {menuOpen === true ? (
        <div className="fixed h-screen w-64 bg-bk1 z-10 left-0 top-0 pt-12 pl-6">
          <ul className="flex flex-1 flex-col justify-end gap-3 text-yll ">
            <Image src="/close.png" alt="close" width={32} height={32} onClick={toggleMenu} />
            <li className="py-1 text-3xl">
              <Link href="#about">Sobre mim</Link>
            </li>
            <li className="py-1 text-3xl">
              <Link href="#projects">projetos</Link>
            </li>
            <li className="py-1 text-3xl">
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
