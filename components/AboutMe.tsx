
import Image from "next/image";
import { AnimatedGreeting } from "./AnimatedGreeting";

const serif = {
  fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
};

export function AboutMe() {
  return (
    <section
      id="about-me"
      className="relative overflow-hidden bg-white px-6 py-14 sm:px-10 md:px-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* =====================================================
            GREETING
        ===================================================== */}
        <div className="mb-5">
          <AnimatedGreeting />
        </div>


        {/* =====================================================
            INTRO + TAPED PHOTO
        ===================================================== */}
        <div className="relative mb-12 max-w-none">

          {/* Taped photo — positioned in front of the intro */}
          <div
  className="
    absolute
    right-0
    -top-12
    z-20
    h-[190px]
    w-[150px]
    rotate-[6deg]
    bg-white
    p-[9px]
    pb-[25px]
    shadow-[0_12px_28px_rgba(0,0,0,0.18)]

    sm:right-4
    sm:-top-14
    sm:h-[230px]
    sm:w-[180px]
    sm:p-[10px]
    sm:pb-[28px]

    md:right-8
    md:-top-16
    md:h-[260px]
    md:w-[205px]
  "
>
            {/* Tape */}
            <div
              className="
                absolute
                -top-[15px]
                left-1/2
                z-40
                h-[30px]
                w-[85px]
                -translate-x-1/2
                -rotate-[4deg]
                bg-[#e8dccb]/90
                shadow-[0_2px_5px_rgba(0,0,0,0.1)]
                sm:-top-[17px]
                sm:h-[34px]
                sm:w-[100px]
              "
            />

            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="/ikram3.jpg"
                alt="Ikram"
                fill
                priority
                className="object-cover"
                sizes="205px"
              />
            </div>
          </div>


          {/* Intro paragraphs */}
          <div className="relative z-10 pr-20 sm:pr-24 md:pr-28">

          </div>
        </div>


        {/* =====================================================
            EDITORIAL TITLE
        ===================================================== */}
        <div className="relative mt-4 min-h-[190px] sm:min-h-[220px]">

          <h2
            className="relative z-10 whitespace-nowrap text-[#171717]"
            style={{
              ...serif,
              fontSize: "clamp(2.2rem, 5vw, 5rem)",
              lineHeight: "0.9",
              letterSpacing: "-0.04em",
            }}
          >
            COMPUTER SYSTEMS
            <br />
            <em className="font-normal">ENGINEER</em>
          </h2>

        </div>


        {/* =====================================================
            LARGE PHOTO + SIDE TEXT
        ===================================================== */}
        <div className="mt-12 grid grid-cols-1 items-start gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-16">

          {/* LARGE IMAGE */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-[500px] overflow-hidden">
              <Image
                src="/ikram2.jpg"
                alt="Ikram"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
          </div>


          {/* RIGHT SIDE */}
          <div className="pt-2 md:pt-10">

            <p
              className="text-xs uppercase tracking-[0.18em] text-[#7b0d1b]"
              style={serif}
            >
              Curious by nature.
            </p>

            <p className="mt-6 text-sm leading-7 text-[#625a56] sm:text-[15px]">
              I’m a Computer Systems Engineering student working across artificial intelligence, networking, cybersecurity, robotics, and software engineering. I enjoy working at the intersection of research and engineering, where challenging technical problems become opportunities to experiment, learn, and create
            </p>

            <p className="mt-5 text-sm leading-7 text-[#625a56] sm:text-[15px]">
              I&apos;m curious, research-minded and hands-on, with a passion for exploring new ideas and turning them into practical, meaningful solutions.
            </p>


            {/* CTA */}
            <a
              href="#projects"
              className="
                mt-8
                inline-flex
                items-center
                rounded-full
                bg-[#7b0d1b]
                px-7
                py-3.5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#5e0914]
              "
            >
              Explore my work
              <span className="ml-3 text-sm">→</span>
            </a>

          </div>

        </div>


        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}
        <div className="mt-16 border-t border-[#7b0d1b]/15 pt-7 md:mt-20">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <p
              className="max-w-xl text-2xl leading-tight text-[#171717] sm:text-3xl"
              style={serif}
            >
              I like asking questions, solving difficult problems, and
              building things that make an impact.
            </p>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7b0d1b]">
              Based in Algeria · Open to opportunities
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}
