"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    setOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Changed "relative" to "sticky top-0"
    <nav className="sticky top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-gray-100 transition-all duration-300">
      
      {/* Custom CSS for the Loop Animation */}
      <style jsx>{`
        @keyframes revealName {
          0%, 15% { max-width: 0; opacity: 0; }
          35%, 80% { max-width: 150px; opacity: 1; }
          100% { max-width: 0; opacity: 0; }
        }
        .animate-reveal {
          animation: revealName 6s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 h-20 md:h-24">

        {/* --- LOGO --- */}
        <a 
          href="#" 
          onClick={(e) => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center font-bold text-2xl tracking-tighter text-slate-900 cursor-pointer"
        >
          <span>Dhruv</span>
          <span className="animate-reveal overflow-hidden whitespace-nowrap text-amber-600">
            &nbsp;Mavani
          </span>
          <span className="text-amber-600">.</span>
        </a>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          {["Projects", "About", "Skills", "Experience", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleScroll(e, `#${item.toLowerCase()}`)}
              className="relative group py-1 transition-colors hover:text-slate-900"
            >
              {item}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full group-hover:left-0 ease-in-out"></span>
            </a>
          ))}

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-medium shadow-md hover:bg-slate-800 hover:-translate-y-0.5 transition-all"
          >
            Resume
          </a>
        </div>

        {/* --- MOBILE HAMBURGER --- */}
        <button
          className="md:hidden p-2 text-slate-900 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col items-end gap-1.5">
            <span className={`h-0.5 bg-current transition-all duration-300 ${open ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
            <span className={`h-0.5 bg-current transition-all duration-300 ${open ? "opacity-0" : "w-4"}`} />
            <span className={`h-0.5 bg-current transition-all duration-300 ${open ? "w-6 -rotate-45 -translate-y-2" : "w-2"}`} />
          </div>
        </button>
      </div>

      {/* --- MOBILE DROPDOWN --- */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center py-8 gap-6 text-lg font-medium text-slate-700">
          {["Projects", "About", "Skills", "Experience", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleScroll(e, `#${item.toLowerCase()}`)}
              className="hover:text-amber-600 transition-colors"
            >
              {item}
            </a>
          ))}
          <a href="/resume.pdf" className="px-8 py-3 rounded-full bg-slate-900 text-white">
            View Resume
          </a>
        </div>
      </div>
    </nav>
  );
}