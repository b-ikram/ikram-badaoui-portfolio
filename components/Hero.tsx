import Image from "next/image";

const serif = {
  fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
};

/* Small hand-drawn arrows inspired by the reference */
const Arrow1 = () => (
  <svg
    viewBox="0 0 90 55"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="arrow arrow-1"
  >
    <path
      className="arrow-draw"
      d="M8 43 C17 31, 17 17, 30 15 C43 13, 46 28, 35 31 C26 34, 24 23, 32 20 C42 16, 57 22, 70 29"
    />
    <path
      className="arrow-head"
      d="M64 23 L71 29 L62 32"
    />
  </svg>
);

const Arrow2 = () => (
  <svg
    viewBox="0 0 90 65"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="arrow arrow-2"
  >
    <path
      className="arrow-draw"
      d="M78 8 C67 8, 58 15, 62 25 C66 35, 78 31, 77 41 C76 51, 61 53, 47 48 C35 44, 25 45, 16 53"
    />
    <path
      className="arrow-head"
      d="M22 45 L15 53 L25 54"
    />
  </svg>
);

const Arrow3 = () => (
  <svg
    viewBox="0 0 95 55"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="arrow arrow-3"
  >
    <path
      className="arrow-draw"
      d="M7 15 C19 27, 36 35, 53 31 C67 28, 72 19, 82 22"
    />
    <path
      className="arrow-head"
      d="M74 16 L83 22 L75 28"
    />
  </svg>
);

export function Hero() {
  return (
    <section
      id="profile"
      className="relative flex min-h-[100svh] flex-col overflow-hidden text-ruby"
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
      className="text-ruby"
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
          className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(93,10,20,0.20)]"
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
        className="absolute bottom-8 right-5 z-30 rounded-full bg-ruby px-7 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cream shadow-lg transition hover:-translate-y-0.5 hover:bg-oxblood sm:right-10 md:bottom-12"
      >
        Explore my work
      </a>
    </section>
  );
}