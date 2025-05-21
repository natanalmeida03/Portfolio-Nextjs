"use client";

import React from "react";

interface KnowCardProps {
  title: string;
  image: string;
}

function KnowCard({ title, image}: KnowCardProps) {
  return (
    <div className="flex gap-2 bg-bk3 px-6 py-3 rounded-lg shadow-lg items-center">
      <img src={image} alt={title} className="w-16 h-16 mx-auto" />
      <h2 className="font-bold text-xl text-black text-center mb-4">{title}</h2>
    </div>
  );
}

export default KnowCard;
