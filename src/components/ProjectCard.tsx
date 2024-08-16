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
    <div className="max-w-80 bg-bk2 p-5 rounded-2xl flex flex-col gap-7 text-white ">
      <h3 className="font-bold text-xl">{title}</h3>
      <img src={image} alt={title} />
      <a href={link} className="text-lg my-8 hover:text-yll before:content-['🔗']"> Visitar Repositório</a>
      <ul className="flex gap-2 flex-wrap">
        {linguagens.map((linguagem, index) => (
          <li key={index} className="inline bg-bk1 rounded-md px-1">{linguagem}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
