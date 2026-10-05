import Image from "next/image";

const serif = {
  fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
};

export function IntroSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 sm:px-10 md:py-32"
      style={{
        background:
           "#ffffff",
      }}
    >
      <div className="mx-auto max-w-7xl">

        {/* Slogan */}
        <div className="mx-auto max-w-3xl text-center">

          <h2
  className="text-center text-[#171717]"
  style={{
    ...serif,
    fontSize: "clamp(2.2rem, 4.5vw, 4.4rem)",
    lineHeight: "0.94",
    letterSpacing: "-0.025em",
  }}
>
  <span className="block">
    WHERE CURIOUS
  </span>

  <span className="block">
    MINDS
  </span>

  <span className="mt-1 flex items-baseline justify-center whitespace-nowrap">
    <em
      className="slogan-meet mr-2"
      style={{
        fontFamily: '"Cormorant Garamond", Georgia, serif',
        fontSize: "1.5em",
        fontStyle: "italic",
        fontWeight: 500,
        letterSpacing: "-0.055em",
      }}
    >
      meet
    </em>

    <span>BOLD SYSTEMS</span>
  </span>
</h2>
        </div>

        {/* Editorial collage */}
        <div className="relative mx-auto mt-20 h-[430px] max-w-3xl sm:h-[500px]">

          {/* Main image — PC */}
          <div className="absolute left-1/2 top-1/2 z-10 h-[330px] w-[230px] -translate-x-1/2 -translate-y-1/2 rotate-[-2deg] overflow-hidden shadow-[0_20px_50px_rgba(93,10,20,0.15)] sm:h-[390px] sm:w-[275px]">
            <Image
              src="/PC.png"
              alt="Ikram working on a computer"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 230px, 275px"
            />
          </div>

          {/* Glasses */}
          <div className="absolute left-[5%] top-[22%] z-20 h-[145px] w-[170px] rotate-[-5deg] overflow-hidden shadow-[0_15px_35px_rgba(93,10,20,0.14)] sm:left-[13%] sm:h-[175px] sm:w-[205px]">
            <Image
              src="/glasses.png"
              alt="Glasses"
              fill
              className="object-cover"
              sizes="205px"
            />
          </div>

          {/* Coffee */}
          {/* Coffee — transparent cutout */}
        <div className="absolute bottom-[8%] right-[2%] z-20 h-[190px] w-[210px] rotate-[6deg] sm:right-[9%] sm:h-[220px] sm:w-[240px]">
             <Image
               src="/coffee.png"
               alt="Coffee"
              fill
              className="object-contain"
             sizes="240px"
                     />
        </div>

          {/* Decorative circle */}
          <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7b0d1b]/10 sm:h-[430px] sm:w-[430px]" />

          {/* Small handwritten label */}
          <p
            className="absolute bottom-0 left-1/2 z-30 -translate-x-1/2  whitespace-nowrap text-xs italic text-ruby/60"
            style={serif}
          >
            always learning · always building
          </p>
        </div>

        {/* Three editorial columns */}
        <div className="mt-24 grid border-t border-[#7b0d1b]/15 md:grid-cols-3">

          {/* 01 */}
          <a
            href="#about-me"
            className="group border-b border-[#7b0d1b]/15 py-8 md:border-b-0 md:border-r md:pr-10"
          >
            <div className="flex gap-6">
              <span
                className="shrink-0 text-5xl text-ruby"
                style={serif}
              >
                01.
              </span>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-ruby">
                  Learn more
                  <br />
                  about me
                </h3>

                <p className="mt-4 max-w-[230px] text-xs leading-relaxed text-[#75665e]">
                  Discover the person behind the projects, my journey in
                  computer systems engineering, and what drives me to build.
                </p>

                <span className="mt-5 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-ruby transition-transform group-hover:translate-x-2">
                  Discover →
                </span>
              </div>
            </div>
          </a>

          {/* 02 */}
          <a
            href="#projects"
            className="group border-b border-ruby/20 py-8 md:border-b-0 md:border-r md:px-10"
          >
            <div className="flex gap-6">
              <span
                className="shrink-0 text-5xl text-ruby"
                style={serif}
              >
                02.
              </span>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-ruby">
                  Explore
                  <br />
                  my work
                </h3>

                <p className="mt-4 max-w-[230px] text-xs leading-relaxed text-[#75665e]">
                  From AI and robotics to networks and cybersecurity, explore
                  the systems, experiments, and research projects I’ve built.
                </p>

                <span className="mt-5 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-ruby transition-transform group-hover:translate-x-2">
                  View projects →
                </span>
              </div>
            </div>
          </a>

          {/* 03 */}
          <a
            href="#contact"
            className="group py-8 md:pl-10"
          >
            <div className="flex gap-6">
              <span
                className="shrink-0 text-5xl text-ruby"
                style={serif}
              >
                03.
              </span>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-ruby">
                  Let&apos;s
                  <br />
                  connect
                </h3>

                <p className="mt-4 max-w-[230px] text-xs leading-relaxed text-[#75665e]">
                  Interested in research, technology, or building something
                  meaningful together? I’d love to hear from you.
                </p>

                <span className="mt-5 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-ruby transition-transform group-hover:translate-x-2">
                  Get in touch →
                </span>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}