"use client";
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Natan() {
  return (
    <section className="h-96 md:h-screen bg-bk1 pt-20 justify-center" id="start">
      <div className="h-full max-w-6xl flex mx-auto">
        <div className="hidden md:block flex-1 my-auto h-fit overflow-hidden rounded-lg shadow-[10px_10px_30px_#2c2c2c] ">
          <img src="/natan2.jpg" alt="natan" />
        </div>
        <div className="flex flex-1 flex-col justify-center pl-6 md:pl-0 text-left md:text-right h-full">
          <h1 className="text-7xl md:text-6xl text-yll font-bold">natan almeida,</h1>
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
