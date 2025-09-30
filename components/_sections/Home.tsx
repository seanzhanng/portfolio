import Image from "next/image";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center mx-auto py-20"
    >
      {/* Profile Picture Placeholder */}
      <Image
        src="/mirror selfie.png"
        alt="Sean Zhang"
        width={320}
        height={320}
        className="rounded-full object-cover mb-6"
      />

      {/* Heading */}
      <h1 className="text-5xl font-bold mb-4">hi! i&apos;m sean zhang!</h1>

      {/* Subheading */}
      <p className="text-xl text-gray-600">
        varsity swimmer · software engineer · schulich leader
      </p>
    </section>
  );
}
