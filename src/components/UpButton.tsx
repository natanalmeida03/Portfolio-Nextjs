"use client";
import { useEffect, useState } from "react";

function UpButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100); // Mostra após 100px de scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div>
      <a
        href="#start"
        className="fixed bottom-5 right-5 bg-yll text-white p-3 rounded-full shadow-lg hover:bg-yll/80 transition duration-300 ease-in-out"
      >
        <img src="/up-arrow-icon.png" alt="Up" width={32} height={32} className="invert filter"/>
      </a>
    </div>
  );
}

export default UpButton;