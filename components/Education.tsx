import Image from "next/image";
import { GraduationCap, Trophy } from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
};

const education = [
  {
    icon: GraduationCap,
    year: "2022",
    endYear: "2027",
    label: "Current",
    degree: "Computer Systems Engineering",
    institution: "ESI — Higher National School of Computer Science",
    location: "Algiers, Algeria",
    details:
      "Building a broad foundation across artificial intelligence, networking, cybersecurity, high-performance computing, software engineering, IoT, algorithm design, combinatorial optimization, and data analysis.",
  },
  {
    icon: Trophy,
    year: "2022",
    label: "Foundation",
    degree: "Scientific Baccalaureate",
    institution: "Les Frères Drif High School",
    location: "Boumerdes, Algeria",
    details: "17.98 / 20 · Very Good Honors",
  },
];

export function Education() {
  return (
    <section
      id="education"
  className="relative overflow-hidden px-6 py-20 sm:px-10 md:px-16 md:py-28"
  style={{
    background: `
      radial-gradient(circle at center,
        #ffffff 0%,
        #ffffff 30%,
        #faf7f2 55%,
        #f1e8dd 100%
      )
    `,
  }}
>
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#7b0d1b]">
              Academic journey
            </p>

            <h2
                className="text-5xl leading-none text-[#171717] md:text-7xl"
            style={serif}
            >
         Education Background
         <br />
            
            </h2>
          </div>

          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-zinc-400 sm:block">
            2022 — 2027
          </span>
        </div>


        {/* HORIZONTAL TIMELINE */}
        <div className="relative">

          {/* LINE */}
          <div className="absolute left-0 right-0 top-[10px] hidden h-px bg-[#7b0d1b]/20 md:block" />

          <div className="grid gap-16 md:grid-cols-[0.8fr_1.8fr] md:gap-20">

            {/* =================================================
                BACCALAUREATE
            ================================================= */}
            <article className="relative">

              {/* DOT */}
              <div className="relative z-10 mb-8 h-[21px] w-[21px] rounded-full border-[5px] border-white bg-zinc-300 shadow-[0_0_0_1px_#d4d4d4]" />

              <p className="font-display text-6xl leading-none text-zinc-300">
                2022
              </p>

              <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                July · Foundation
              </p>

              <h3
                className="mt-5 text-3xl leading-tight text-[#171717]"
                style={serif}
              >
                Scientific
                <br />
                <em>Baccalaureate</em>
              </h3>

              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-[#7b0d1b]">
                Les Frères Drif High School
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-zinc-400">
                Boumerdes, Algeria
              </p>

              <p className="mt-7 font-display text-3xl text-[#171717]">
                17.98
                <span className="ml-1 text-sm text-zinc-400">/ 20</span>
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#7b0d1b]">
                Very Good Honors
              </p>
            </article>


            {/* =================================================
                ESI
            ================================================= */}
            <article className="relative">

              {/* DOT */}
              <div className="relative z-10 mb-8 h-[21px] w-[21px] rounded-full border-[5px] border-white bg-[#7b0d1b] shadow-[0_0_0_1px_#7b0d1b]" />

              {/* CONTENT + PHOTO */}
              <div className="grid items-start gap-10 md:grid-cols-[1fr_155px]">

                {/* TEXT */}
                <div>

                  <div className="flex items-center gap-3">
                    <p className="font-display text-6xl leading-none text-[#7b0d1b]">
                      2027
                    </p>

                    <span className="rounded-full bg-[#7b0d1b]/8 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.18em] text-[#7b0d1b]">
                      Current
                    </span>
                  </div>

                  <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                    Expected June · 2022 — Present
                  </p>

                  <h3
                    className="mt-6 text-4xl leading-[0.95] text-[#171717] md:text-5xl"
                    style={serif}
                  >
                    Computer Systems
                    <br />
                    <em className="text-[#7b0d1b]">Engineering</em>
                  </h3>

                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#7b0d1b]">
                    ESI — Higher National School of Computer Science
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-zinc-400">
                    Algiers, Algeria
                  </p>

                  <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-600">
                    Building a broad foundation across{" "}
                    <span className="font-medium text-[#171717]">
                      artificial intelligence, networking, cybersecurity,
                      high-performance computing, software engineering, IoT,
                      algorithm design, combinatorial optimization, and data
                      analysis.
                    </span>
                  </p>

                  {/* TAGS */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "AI",
                      "Networking",
                      "Cybersecurity",
                      "HPC",
                      "IoT",
                      "Software",
                    ].map((item) => (
                      <span
                        key={item}
                        className="border border-zinc-200 px-3 py-1.5 text-[8px] uppercase tracking-[0.14em] text-zinc-500 transition-colors hover:border-[#7b0d1b]/30 hover:text-[#7b0d1b]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>


                {/* =================================================
                    SMALL TAPED ESI PHOTO
                ================================================= */}
                <div className="relative hidden md:block">

                  <div
                    className="
                      relative
                      ml-auto
                      mt-2
                      h-[250px]
                      w-[195px]
                      rotate-[4deg]
                      bg-white
                      p-[7px]
                      pb-[18px]
                      shadow-[0_10px_24px_rgba(0,0,0,0.14)]
                    "
                  >

                    {/* TAPE */}
                    <div
                      className="
                        absolute
                        -top-[12px]
                        left-1/2
                        z-20
                        h-[25px]
                        w-[70px]
                        -translate-x-1/2
                        -rotate-[5deg]
                        bg-[#e8dccb]/90
                        shadow-[0_2px_4px_rgba(0,0,0,0.08)]
                      "
                    />

                    <div className="relative h-full w-full overflow-hidden">
                      <Image
                        src="/esi.jpg"
                        alt="ESI — Higher National School of Computer Science"
                        fill
                        className="object-cover"
                        sizes="135px"
                      />
                    </div>

                  </div>

                  <p className="mt-5 text-center text-[8px] uppercase tracking-[0.18em] text-zinc-400">
                    ESI · Algiers
                  </p>

                </div>

              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  );
}