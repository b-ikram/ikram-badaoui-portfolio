import Image from "next/image";

const serif = {
  fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
};

/* Small hand-drawn arrows inspired by the reference */
const Arrow1 = () => (
  <svg
    viewBox="0 0 85 55"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="arrow arrow-1"
  >
    {/* loose loop + arrow */}
    <path
      className="arrow-draw"
      pathLength="1"
      d="M8 12
         C4 22, 7 35, 20 39
         C32 43, 43 35, 39 25
         C35 16, 22 17, 19 27
         C16 37, 29 43, 43 42
         C56 41, 66 35, 77 30"
    />
    {/* head: tip at (77,30), aligned with the end tangent */}
    <path
      className="arrow-head"
      pathLength="1"
      d="M67.9 29.2 L77 30 L71.5 37.4"
    />
  </svg>
);

const Arrow3 = () => (
  <svg
    viewBox="0 0 80 55"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="arrow arrow-2"
  >
    {/* playful upward curve, now ending pointing right */}
    <path
      className="arrow-draw"
      pathLength="1"
      d="M6 39
         C18 48, 31 45, 38 36
         C45 27, 49 16, 62 12
         C67 10.5, 71 10, 75 10"
    />
    {/* head: tip at (75,10) */}
    <path
      className="arrow-head"
      pathLength="1"
      d="M68 5.5 L75 10 L68 14.5"
    />
  </svg>
);

const Arrow2 = () => (
  <svg
    viewBox="0 0 85 60"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="arrow arrow-3"
  >
    {/* loose S-shaped arrow */}
    <path
      className="arrow-draw"
      pathLength="1"
      d="M77 8
         C62 6, 51 11, 50 21
         C49 31, 61 32, 61 39
         C61 48, 45 52, 31 49
         C21 47, 13 48, 7 53"
    />
    {/* head: tip at (7,53), pointing down-left */}
    <path
      className="arrow-head"
      pathLength="1"
      d="M10.3 44.4 L7 53 L16.1 51.4"
    />
  </svg>
);
export function Hero() {
  return (
    <section
      id="profile"
      className="relative flex min-h-[100svh] flex-col overflow-hidden text-[#9b1c0e]"
      style={{
        background:
          "linear-gradient(180deg, #e5d9ce 0%, #eee8e1 42%, #faf9f6 100%)",
      }}
    >
      {/* Main title */}
      {/* Curved main title */}
<div className="relative z-0 mx-auto mt-28 h-[210px] w-full max-w-[1400px] sm:mt-24">
    <svg
    viewBox="0 0 1000 210"
    className="absolute inset-0 h-full w-full overflow-visible"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <path
        id="title-curve"
        d="M 35,155 Q 500,45 965,155"
      />
    </defs>

    <text
      fill="currentColor"
      textAnchor="middle"
      className="text-[#9b1c0e]"
      style={{
        ...serif,
        fontSize: "130px",
        letterSpacing: "-3px",
      }}
    >
      <textPath href="#title-curve" startOffset="50%">
        HI, <tspan fontStyle="italic">I&apos;m</tspan> IKRAM
      </textPath>
    </text>
  </svg>
</div>

      {/* Cutout photo */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-[74%] w-[min(92vw,640px)] -translate-x-1/2 sm:h-[80%]">        <Image
          src="/ikram.png"
          alt="Ikram Badaoui"
          fill
          priority
          className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(155,28,14,0.20)]"
          sizes="(max-width: 768px) 92vw, 640px"
        />
      </div>

      {/* Desktop annotations */}
      <div className="pointer-events-none absolute inset-x-0 top-[36%] z-20 mx-auto hidden max-w-7xl px-8 md:block">

        {/* LEFT — Engineering */}
        <div
          className="absolute left-8 top-0 w-52"
          style={serif}
        >
          <p className="hero-note">
            COMPUTER SYSTEMS
            <br />
            ENGINEERING
            <br />
            STUDENT
          </p>

          <div className="mt-2 ml-24 text-note">
            <Arrow1 />
          </div>
        </div>

        {/* LEFT — Technical areas */}
        <div
          className="absolute left-12 top-52 w-52"
          style={serif}
        >
          <p className="hero-note">
            AI · NETWORKS
            <br />
            CYBERSECURITY
            <br />
            ROBOTICS
          </p>

          <div className="mt-2 ml-24 text-note">
            <Arrow3 />
          </div>
        </div>

        {/* RIGHT — What I build */}
        <div
          className="absolute right-8 top-4 w-56 text-right"
          style={serif}
        >
          <p className="hero-note">
            BUILDING INTELLIGENT
            <br />
            SYSTEMS THAT SOLVE
            <br />
            REAL PROBLEMS
          </p>

          <div className="mt-2 mr-16 flex justify-end text-note">
            <Arrow2 />
          </div>
        </div>

        {/* RIGHT — Personal statement */}
        <div
          className="absolute right-10 top-56 w-48 text-right"
          style={serif}
        >
          <p className="hero-note-small">
            RESEARCH-MINDED.
            <br />
            TECHNICALLY CURIOUS.
            <br />
            ALWAYS BUILDING.
          </p>
        </div>
      </div>

      {/* CTA */}
      <a
        href="#projects"
        className="absolute bottom-8 right-5 z-30 rounded-full bg-[#9b1c0e] px-7 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cream shadow-lg transition hover:-translate-y-0.5 hover:bg-oxblood sm:right-10 md:bottom-12"
      >
        Explore my work
      </a>
    </section>
  );
}