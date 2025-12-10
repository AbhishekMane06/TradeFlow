import React, { useState } from "react";
import { Command, ChevronDown } from "lucide-react";
import { navLinks } from "../../constants";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-3.5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl h-14 bg-[#1b1b1b] border border-white/10 scale-95 rounded-full px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 hover:-translate-y-1 transition duration-200"
          onClick={() => window.location.reload()}
        >
          <Command className="w-5 h-5 text-indigo-400" />
          <span className="font-bold text-base clash-display text-white cursor-pointer">
            TradeFlow
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id.toLowerCase()}`}
                  className="text-sm text-zinc-300 hover:text-indigo-300 hover:-translate-y-1 transition duration-300 inline-block"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          <button
            id="#CaSection"
            className="bg-gradient-to-r from-indigo-400 to-indigo-600 px-4 py-2 text-white rounded-full clash-display hover:-translate-y-0.5 shadow-indigo-900 transition duration-200"
          >
            Start Trading
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center gap-1 text-white"
        >
          <ChevronDown
            className={`w-7 h-7 transition-all duration-300 ${
              open ? "rotate-180 text-indigo-400" : "rotate-0"
            }`}
          />
        </button>
      </header>

      {/* Mobile Dropdown */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
      fixed inset-0 
      backdrop-blur-md 
      z-40 
      transition-opacity 
      duration-300
    "
        />
      )}

      <div
        className={`
    md:hidden
    overflow-hidden
    fixed top-[88px] left-1/2 -translate-x-1/2
    w-[90%] max-w-2xl
    bg-[#1b1b1b] border border-white/10 
    rounded-2xl shadow-xl
    transition-all duration-300
    z-50
    ${open ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 py-0"}
  `}
      >
        <ul className="flex flex-col gap-4 px-6">
          {navLinks.map((link, index) => (
            <li key={link.id}>
              <a
                href={`#${link.id.toLowerCase()}`}
                className="text-white text-lg font-medium hover:text-indigo-300 transition duration-200"
                onClick={() => setOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}

          <button
            onClick={() => setOpen(false)}
            className="mt-4 bg-gradient-to-r from-indigo-400 to-indigo-600 px-4 py-3 rounded-full text-white clash-display hover:-translate-y-1 transition duration-200 shadow-indigo-900"
          >
            Start Trading
          </button>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
