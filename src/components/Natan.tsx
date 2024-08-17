"use client";
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Natan() {
  return (
    <section className="h-screen bg-bk1 pt-20 justify-center" id="start">
      <div className="h-full max-w-6xl flex mx-auto">
        <div className="flex-1 p-5 my-auto h-fit ">
          <img src="/natan.jpg" alt="natan" />
        </div>
        <div className="flex flex-1 flex-col justify-center text-right h-full">
          <h1 className="text-6xl text-yll font-bold">natan almeida,</h1>
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
