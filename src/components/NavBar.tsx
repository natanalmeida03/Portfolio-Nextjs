"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MuseoModerno } from '@next/font/google';
import { Sun, Moon } from "lucide-react";

const museoModerno = MuseoModerno({
  subsets: ['latin'],
  weight: ['400', '700'],
});

function NavBar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [dark, setDark] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    setDark((prev) => !prev);
    if (typeof window !== "undefined") {
      if (!dark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  return (
    <div className="bg-bk3/50 dark:bg-bk1/50 h-16 fixed w-full z-50">
      <nav className="bg-bk3/50 dark:bg-bk1/50 flex max-w-5xl mx-auto justify-between h-16 items-center backdrop-blur-sm">
        <Link href="#start">
          <h1 className={`text-4xl font-bold text-yll dark:text-white flex-1 pl-4 md:pr-0 ${museoModerno.className}`}>natan</h1>
        </Link>
        <ul className="hidden md:flex flex-1 justify-end gap-2 text-yll dark:text-white ">
          <li className="mx-5 py-1 relative group overflow-hidden">
            <Link href="#about" className="relative z-10 font-semibold">
              About
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-y transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="mx-5 py-1 relative group overflow-hidden">
            <Link href="#projects" className="relative z-10 font-semibold ">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-y transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="mx-5 py-1 relative group overflow-hidden">
            <Link href="#know" className="relative z-10 font-semibold">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-y transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
        {/* Botão de tema */}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded hover:bg-bk4 dark:hover:bg-bk2 transition-colors"
          aria-label="Alternar tema"
        >
          {dark ? (
            <Sun className="w-6 h-6 text-white" />
          ) : (
            <Moon className="w-6 h-6 text-yll" />
          )}
        </button>
        <div className="block md:hidden pr-4">
          {menuOpen ? (
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
      {menuOpen ? (
        <div className="fixed h-screen w-64 bg-bk3 dark:bg-bk1 z-[-1] left-0 top-0 pt-14 pl-4">
          <ul className="flex flex-1 flex-col justify-end gap-2 text-yll dark:text-white ">
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
      ) : null}
    </div>
  );
}

export default NavBar;