"use client";

import Header from "@/components/Header";
import Work from "@/components/Work";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="text-gray-900 p-6 max-w-3xl mx-auto space-y-12">
      <Header />
      <Work />
      <Projects />
    </main>
  );
}
