"use client";

const serif = {
  fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
};

const values = [
  {
    title: "GROWTH MINDSET",
    text: "I believe progress comes from staying curious, learning from mistakes, and constantly pushing beyond what I already know.",
  },
  {
    title: "RESEARCH MINDSET",
    text: "I like going beyond the obvious — understanding how things work, exploring ideas, and turning questions into something concrete.",
  },
  {
    title: "CURIOSITY",
    text: "I'm naturally drawn to unfamiliar problems, new ideas, and challenges that make me ask what could be possible.",
  },
  {
    title: "BUILD TO LEARN",
    text: "I learn by creating, experimenting, testing, breaking things, and finding better ways to make them work.",
  },
];

export function MyValues() {
  return (
    <section
      id="my-values"
      className="relative overflow-hidden bg-[#faf7ee]"
    >
      {/* VALUES AREA */}
<div className="relative min-h-[720px] overflow-hidden py-16 sm:py-20">

  {/* Flower background */}
  <div
    className="pointer-events-none absolute left-1/2 top-1/2 h-[680px] w-[1100px] -translate-x-1/2 -translate-y-1/2 bg-contain bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/flower.png')",
    }}
  />

  {/* 4 SMALL VALUE CARDS */}
  <div className="relative z-10 mx-auto grid max-w-[620px] grid-cols-2 gap-4 px-6 sm:gap-5">

    {values.map((value, index) => (
      <article
        key={value.title}
        className="group aspect-square bg-[#9b1c0e] p-5 text-white shadow-[0_10px_30px_rgba(93,10,20,0.18)] transition-transform duration-500 hover:-translate-y-1 sm:p-6"
      >
        <div className="flex h-full flex-col justify-between">

          {/* Number */}
          <span className="text-[8px] font-bold tracking-[0.25em] text-white/60 sm:text-[9px]">
            0{index + 1}
          </span>

          {/* Text */}
          <div>
            <h3
              className="text-lg uppercase leading-[0.95] tracking-[-0.02em] sm:text-xl"
              style={serif}
            >
              {value.title}
            </h3>

            <p className="mt-3 text-[9px] leading-[1.55] text-white/75 sm:text-[10px]">
              {value.text}
            </p>
          </div>

        </div>
      </article>
    ))}

  </div>

  {/* Quote */}
  <p
    className="relative z-10 mt-12 text-center text-lg italic text-[#171717] sm:text-xl"
    style={serif}
  >
    Like the Gladiolus, stand tall and bloom with strength
  </p>

</div>
    </section>
  );
}