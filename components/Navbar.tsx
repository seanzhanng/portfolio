"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="mx-auto w-3/5 flex justify-between items-center py-6">
        {/* Left: Nav links */}
        <div className="flex space-x-12">
          <a
            href="#home"
            className="font-bold text-xl text-gray-800 hover:text-gray-500 hover:underline"
          >
            home
          </a>
          <a
            href="#about"
            className="font-bold text-xl text-gray-800 hover:text-gray-500 hover:underline"
          >
            about
          </a>
          <a
            href="#contact"
            className="font-bold text-xl text-gray-800 hover:text-gray-500 hover:underline"
          >
            contact
          </a>
        </div>

        {/* Right: More spaced PNG icons */}
        <div className="flex space-x-10">
          <a
            href="https://github.com/seanzhanng"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Image
              src="/github.png"
              alt="GitHub"
              width={40}
              height={40}
              className="hover:opacity-70 transition"
            />
          </a>
          <a
            href="https://linkedin.com/in/seanzhanng"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={40}
              height={40}
              className="hover:opacity-70 transition"
            />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
          >
            <Image
              src="/resume.png"
              alt="Resume"
              width={40}
              height={40}
              className="hover:opacity-70 transition"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
