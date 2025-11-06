"use client";

export default function Work() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Work</h2>

      <div className="mb-6">
        <div className="flex justify-between items-baseline">
          <h3 className="text-xl font-semibold text-gray-800">WAT.ai</h3>
          <p className="text-sm text-gray-600">Sept. 2025 – Present</p>
        </div>
        <p className="text-lg mt-1">
          building an ai-powered music transcription system that converts any
          song into professional piano sheet music
        </p>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-baseline">
          <h3 className="text-xl font-semibold text-gray-800">APi Group</h3>
          <p className="text-sm text-gray-600">Jun. 2025 – Aug. 2025</p>
        </div>
        <p className="text-lg mt-1">
          built internal software systems to improve efficiency and reduce costs
          across departments
        </p>
      </div>
    </section>
  );
}
