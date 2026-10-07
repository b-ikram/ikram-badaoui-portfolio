const serif = {
  fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
};

export function ValuesMarquee() {
  const items = Array.from({ length: 8 });

  return (
    <div className="marquee-wrapper overflow-hidden whitespace-nowrap">
      <div className="marquee-track flex w-max">
        {[...items, ...items].map((_, i) => (
          <span
            key={i}
            className="shrink-0 px-10 text-6xl uppercase leading-none sm:text-8xl"
            style={serif}
          >
            <span className="split-text">
              <span className="split-text-top">My Values</span>
              <span className="split-text-bottom" aria-hidden="true">
                My Values
              </span>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}