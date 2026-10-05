const serif = {
  fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
};

const experiences = [
  {
    year: "2026",
    type: "Internship",
    title: "Network & Datacenter Intern",
    company: "Sonatrach — Division Forage",
    location: "Algeria",
    description:
      "Worked on the modeling, configuration, and security of a datacenter network using GNS3 and VMware. The work covered VLAN segmentation, redundancy, ACLs, NAT, DMZ services, proxy, VPN, monitoring, and network security analysis.",
    tags: ["GNS3", "Networking", "Cybersecurity", "VMware"],
  },
  {
    year: "2026",
    type: "Research Internship",
    title: "Sparse-Training Deep Reinforcement Learning for TSN Reconfiguration",
    company: "Deggendorf Institute of Technology — THD",
    location: "Deggendorf, Germany",
    description:
      "Research project focused on sparse actor–critic reinforcement learning for dynamic TSN schedule reconfiguration, exploring model sparsity and its impact on performance, efficiency, and deployment.",
    tags: ["Deep RL", "TSN", "Sparse Training", "CNC"],
  },
];

export function WorkExperience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-20 sm:px-10 md:px-16 md:py-28"
      style={{
        background: `
          radial-gradient(
            ellipse at center,
            #ffffff 0%,
            #ffffff 22%,
            #faf6f0 48%,
            #eee1d4 78%,
            #e4d4c5 100%
          )
        `,
      }}
    >
      <div className="relative mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#7b0d1b]">
              Professional journey
            </p>

            <h2
              className="text-5xl leading-[0.9] text-[#171717] md:text-7xl"
              style={serif}
            >
              Work
              <br />
              <em className="text-[#7b0d1b]">Experience</em>
            </h2>
          </div>

          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-zinc-400 sm:block">
            2026
          </span>
        </div>

        {/* EXPERIENCE */}
        <div className="relative">
          {/* timeline line */}
          <div className="absolute bottom-0 left-[9px] top-0 hidden w-px bg-[#7b0d1b]/20 md:block" />

          <div className="space-y-16 md:space-y-20">
            {experiences.map((experience, index) => (
              <article
                key={experience.title}
                className="relative grid gap-8 md:grid-cols-[130px_1fr]"
              >
                {/* YEAR */}
                <div className="relative">
                  <div className="hidden md:block">
                    <div className="absolute left-[3px] top-2 z-10 h-[13px] w-[13px] rounded-full border-[3px] border-white bg-[#7b0d1b] shadow-[0_0_0_1px_#7b0d1b]" />
                  </div>

                  <p
                    className="text-5xl leading-none text-[#7b0d1b] md:pl-8 md:text-6xl"
                    style={serif}
                  >
                    {experience.year}
                  </p>
                </div>

                {/* CONTENT */}
                <div
                  className={`${
                    index === 0 ? "border-t-[#7b0d1b]" : "border-t-zinc-300"
                  } border-t pt-6`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#7b0d1b]">
                      {experience.type}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-zinc-300" />

                    <span className="text-[9px] uppercase tracking-[0.15em] text-zinc-400">
                      {experience.location}
                    </span>
                  </div>

                  <h3
                    className="mt-4 max-w-3xl text-3xl leading-tight text-[#171717] md:text-4xl"
                    style={serif}
                  >
                    {experience.title}
                  </h3>

                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#7b0d1b]">
                    {experience.company}
                  </p>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-600">
                    {experience.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-zinc-300/80 bg-white/40 px-3 py-1.5 text-[8px] uppercase tracking-[0.14em] text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}