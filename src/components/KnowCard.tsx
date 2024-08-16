"use client";

import React from "react";

interface KnowCardProps {
  title: string;
  image: string;
}

function KnowCard({ title, image}: KnowCardProps) {
  return (
    <div className="bg-bk1 p-6 rounded-lg shadow-lg">
      <h2 className="font-bold text-2xl text-white text-center mb-4">{title}</h2>
      <img src={image} alt={title} className="w-36 h-36 mx-auto" />
    </div>
  );
}

export default KnowCard;
