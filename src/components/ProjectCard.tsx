"use client";
import React from "react";

interface ProjectCardProps {
  title: string;
  image: string;
  link: string;
  linguagens: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  link,
  linguagens,
}) => {
  return (
    <div className="max-w-80 bg-bk3 dark:bg-bk1 p-5 rounded-2xl flex flex-col gap-7 text-black dark:text-white min-h-[450px] z-0 hover:scale-105 transition-all duration-300">
      <h3 className="font-bold text-xl text-pk dark:text-white">{title}</h3>
      <div className="overflow-hidden rounded-xl">
        <img src={image} alt={title} />
      </div>
      <a href={link} target="blank" className="text-lg my-8 dark:hover:text-bk3"> <span className="text-y font-bold">{"</>"}</span> see on github</a>
      <ul className="flex gap-2 flex-wrap">
        {linguagens.map((linguagem, index) => (
          <li key={index} className="inline bg-pk/30 rounded-md px-1">{linguagem}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
