"use client";
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Natan() {
  return (
    <section className="h-96 md:h-screen bg-bk3 pt-20 justify-center" id="start">
      <div className="h-full max-w-5xl flex mx-auto">
        <div className="hidden lg:block flex-1 my-auto h-fit overflow-hidden rounded-lg shadow-[10px_10px_30px_#aaa] ">
          <img src="/natan3.png" alt="natan" />
        </div>
        <div className="flex flex-1 flex-col justify-center pl-4 md:pr-0 text-left lg:text-right h-full">
          <h1 className="text-7xl lg:text-6xl text-yll font-bold">natan almeida,</h1>
          <p className="text-pk font-semibold text-2xl">
            Desenvolvedor
            <Typewriter
              words={[" Front-end", " Back-end", " Full-stack"]}
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
