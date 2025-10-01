export default function ContactSection() {
  return (
    <section id="contact" className="flex items-center mx-auto py-10">
      <div>
        <h2 className="text-4xl font-bold mb-4">contact</h2>
        <p className="text-lg mb-4">
          feel free to reach out to me on{" "}
          <a
            href="https://linkedin.com/in/seanzhanng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            linkedin
          </a>
          , by{" "}
          <a
            href="mailto:sean.zhang1@uwaterloo.ca"
            className="text-blue-600 hover:underline"
          >
            email
          </a>{" "}
          (sean.zhang1@uwaterloo.ca), or on{" "}
          <a
            href="https://github.com/seanzhanng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            github
          </a>
          !
        </p>

        <p className="text-lg">
          you can also{" "}
          <a
            href="/resume.pdf"
            download="resume.pdf"
            className="text-blue-600 hover:underline"
          >
            download my resume here
          </a>
          .
        </p>
      </div>
    </section>
  );
}
