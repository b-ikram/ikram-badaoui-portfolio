const serif = {
  fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
};

type FooterProps = {
  github: string;
  linkedin: string;
};

export function Footer({ github, linkedin }: FooterProps) {
  const links = [
    { label: "GitHub", href: github },
    { label: "LinkedIn", href: linkedin },
  ];

  return (
    <footer className="border-t border-[#9b1c0e]/15 bg-white px-6 py-8 sm:px-10 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-xs text-[#625a56] sm:text-sm" style={serif}>
          © {new Date().getFullYear()} Ikram Badaoui
        </p>

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group relative pb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#171717] transition-colors duration-300 hover:text-[#9b1c0e]"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#9b1c0e] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}