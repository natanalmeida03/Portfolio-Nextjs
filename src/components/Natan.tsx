"use client";
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Natan() {
  return (
    <section className="h-96 md:h-screen bg-bk3 dark:bg-bk1 pt-20 justify-center" id="start">
      <div className="h-full max-w-5xl flex mx-auto">
        <div className="hidden lg:block flex-1 my-auto h-fit overflow-hidden rounded-lg shadow-[10px_10px_30px_#aaa] dark:shadow-[10px_10px_30px_#222] ">
          <img src="/natan3.png" alt="natan" />
        </div>
        <div className="flex flex-1 flex-col justify-center pl-4 md:pr-0 text-left lg:text-right h-full">
          <h1 className="text-7xl lg:text-6xl text-pk dark:text-white font-bold">Natan Almeida,</h1>
          <p className="text-yll font-semibold text-2xl">
            <Typewriter
              words={["Front-end developer", "Back-end developer", "Full-stack developer"]}
              cursor
              loop={true}
            />
          </p>
        </div>
      </div>
    </section>
  );
}

export default Natan;
