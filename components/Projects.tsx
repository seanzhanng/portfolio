"use client";

import Image from "next/image";

export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="mb-6">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-semibold text-gray-800">TradeStream</h3>
          <a
            href="https://github.com/seanzhanng/TradeStream"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github.png"
              alt="GitHub link"
              width={24}
              height={24}
              className="hover:opacity-75 transition-opacity"
            />
          </a>
        </div>

        <p className="text-lg mt-1 text-gray-800">
          a financial data streaming and visualization platform for traders and
          analysts
        </p>
      </div>
    </section>
  );
}