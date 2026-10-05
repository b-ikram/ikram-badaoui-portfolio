const serif = { fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif' };

export function ValuesMarquee() {
  const items = Array.from({ length: 8 });
  return (
    <div className="overflow-hidden border-y border-ruby/15 bg-paper py-6 text-ruby" aria-label="My values">
      <div className="marquee-track flex w-max whitespace-nowrap">
        {[...items, ...items].map((_, i) => (
          <span
            key={i}
            className="px-8 text-6xl uppercase leading-none sm:text-8xl"
            style={serif}
          >
            My Values
            <span className="mx-8 align-middle text-3xl text-ruby/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}