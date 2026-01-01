"use client";

import Image from "next/image";

export default function Header() {
  return (
    <section>
      <div className="flex items-center mb-6">
        <h1 className="text-4xl font-bold mr-4">Sean Zhang</h1>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/seanzhanng/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={28}
              height={28}
              className="hover:opacity-75 transition-opacity"
            />
          </a>

          <a
            href="https://github.com/seanzhanng/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github.png"
              alt="GitHub"
              width={28}
              height={28}
              className="hover:opacity-75 transition-opacity"
            />
          </a>

          <a href="mailto:sean.zhang1@uwaterloo.ca">
            <Image
              src="/email.png"
              alt="Email"
              width={28}
              height={28}
              className="hover:opacity-75 transition-opacity"
            />
          </a>
        </div>
      </div>

      <div className="text-lg space-y-3">
        <p>{"i'm a cs student and varsity swimmer at uwaterloo"}</p>
        <p>
          i like to build software, explore ai/ml, and work with data systems
        </p>
        <p>
          outside of tech, i enjoy swimming, sleeping, speedcubing, and
          practicing guitar
        </p>
      </div>
    </section>
  );
}
