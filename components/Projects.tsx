"use client";

import Image from "next/image";

export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="mb-6">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-semibold text-gray-800">tradestream</h3>
          <a
            href="https://github.com/seanzhanng/tradestream"
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
          a market data streaming platform for traders and analysts
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-semibold text-gray-800">coursecraft</h3>
        </div>

        <p className="text-lg mt-1 text-gray-800">
          a course/class schedule builder for students
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-semibold text-gray-800">swimset</h3>
          <a
            href="https://github.com/seanzhanng/swimset"
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
          a swim workout builder and dsl parser for coaches 
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-semibold text-gray-800">queuesavor</h3>
        </div>

        <p className="text-lg mt-1 text-gray-800">
          a crowdsource service that estimates wait times at restaurants
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-semibold text-gray-800">wakeguard</h3>
          <a
            href="https://github.com/seanzhanng/wakeguard"
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
          a focus tool for students and drivers using cv
        </p>
      </div>
    </section>
  );
}