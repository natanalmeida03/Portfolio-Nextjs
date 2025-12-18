"use client";

import React from "react";

interface CareerCardProps {
  company: string;
  image: string;
  role: string;
  period: string;
  skills: string[];
  position?: "left" | "right";
}

function CareerCard({ 
  company, 
  image, 
  role, 
  period, 
  skills, 
  position = "left",
}: CareerCardProps) {

  const CardContent = () => (
    <div className="bg-bk4/60 dark:bg-bk2/60 rounded-xl p-6 shadow-sm backdrop-blur-sm max-w-sm w-full">
      <div className="flex items-center gap-4 mb-4">
        <img src={image} alt={company} className="w-14 h-14 rounded-lg shadow-md object-cover" />
        <div>
          <h2 className="font-bold text-lg text-pk dark:text-bk3">{company}</h2>
          <p className="text-sm text-black/60 dark:text-white/60">{period}</p>
        </div>
      </div>
      <h3 className="font-semibold text-base text-pk dark:text-white mb-3">{role}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-y/20 text-y px-3 py-1 rounded-full text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="md:hidden flex-1 bg-bk4/50 dark:bg-bk2/50 rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <img src={image} alt={company} className="w-12 h-12 rounded-lg shadow-sm object-cover" />
          <div>
            <h2 className="font-bold text-base text-pk dark:text-bk3">{company}</h2>
            <p className="text-xs text-black/60 dark:text-white/60">{period}</p>
          </div>
        </div>
        <h3 className="font-semibold text-base text-pk dark:text-white mb-2">{role}</h3>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill, index) => (
            <span key={index} className="bg-y/20 text-y px-2.5 py-0.5 rounded-full text-xs font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] w-full items-center">
        <div className="flex justify-end pr-10">
          {position === "left" ? <CardContent /> : null}
        </div>
        <div className="flex justify-center">
          <div className="w-5 h-5 bg-y rounded-full border-[3px] border-bk3 dark:border-bk1 z-10 shadow-sm" />
        </div>
        <div className="flex justify-start pl-10">
          {position === "right" ? <CardContent /> : null}
        </div>
      </div>
    </>
  );
}

export default CareerCard;