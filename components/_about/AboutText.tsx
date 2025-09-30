// AboutText.tsx
export default function AboutText() {
  return (
    <>
      <p className="text-lg leading-relaxed mb-4 lowercase">
        hi! i&apos;m sean zhang, a cs student and varsity swimmer at uwaterloo.
      </p>

      <p className="text-lg leading-relaxed mb-4 lowercase">
        i love building software, exploring ai/ml, and working with data
        systems. in the past i&apos;ve worked as a software engineer at{" "}
        <a
          href="https://habtech.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-400 hover:underline transition-colors"
        >
          habtech communications
        </a>{" "}
        and a software/ml engineer at{" "}
        <a
          href="https://www.pianofi.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-400 hover:underline transition-colors"
        >
          pianofi
        </a>{" "}
        (watai).
      </p>

      <p className="text-lg leading-relaxed lowercase">
        outside of tech, i enjoy swimming, walks in nature, sky photography, and
        listening to music across all genres.
      </p>
    </>
  );
}
