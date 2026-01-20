"use client";

import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-32">
      {/* Back to Home Button */}
      <Link
        href="/"
        className="inline-block mb-8 px-6 py-3 bg-red-500 rounded-lg
                   hover:bg-red-600 transition-colors"
      >
        Back Home
      </Link>

      {/* Resume Section */}
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Resume</h1>

        <p className="text-gray-400 mb-6">
          You can scroll through my resume below, or download a PDF copy.
        </p>

        {/* Download Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-6 px-6 py-3 border border-red-500
                     text-red-500 rounded-lg hover:bg-red-500 hover:text-white
                     transition-colors"
        >
          Download Resume PDF
        </a>

        {/* Embed PDF */}
        <div className="w-full h-[800px] border border-red-500 rounded-lg overflow-hidden">
          <iframe
            src="/resume.pdf"
            className="w-full h-full"
            title="My Resume"
          />
        </div>
      </section>
    </main>
  );
}
