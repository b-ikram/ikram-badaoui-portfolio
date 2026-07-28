import {
  BrainCircuit,
  Cpu,
  Database,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  Network,
  Palette,
  ShieldCheck,
  Sparkles,
  Trophy
} from "lucide-react";

export const profile = {
  name: "Ikram Badaoui",
  title: "Computer Systems Engineering Student",
  email: "mi_badaoui@esi.dz",
  github: "https://github.com/b-ikram",
  linkedin: "https://www.linkedin.com/in/ikram-badaoui-9b89a3268/",
  cv: "/Ikram_Badaoui_CV.pdf",
  location: "Algiers, Algeria",
  intro:
    "Passionate about Artificial Intelligence, Machine Learning, and Software Engineering. Hands-on experience in research, robotics, and web development through academic and competitive projects. Motivated to contribute to innovative technologies while continuously expanding technical expertise."
};

export const navItems = ["profile", "education", "projects", "technologies", "design", "experience", "Trainings", "contact"];
export const focusAreas = [
  "Artificial Intelligence",
  "Software Engineering",
  "Computer Networks",
  "Cybersecurity",
  "Full-Stack Development",
  "UI/UX Design",
  "Motion Graphics"
];

export const technologies = [
  "Python",
  "C++",
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "Git",
  "Linux",
  "ROS2",
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "NumPy",
  "Pandas",
  "Apache Spark"
];

export const categoriesList = [
  "All",
  "AI",
  "HPC",
  "Networks",
  "Cyber Security",
  "Research",
  "Big Data",
  "Software",
  "Robotics"
] as const;

export const projects = [
  {
    title: "RL-HGGA Bin Packing Optimizer",
    categories: ["AI", "Research", "Software"],
    icon: BrainCircuit,
    repo: "https://github.com/b-ikram/rl-hgga-bin-packing",
    description:
      "Research project on reinforcement learning-guided hybrid heuristics for the one-dimensional bin packing problem, comparing classical heuristics, genetic search, and adaptive optimization strategies.",
    technologies: ["Python", "Jupyter", "Reinforcement Learning", "Genetic Algorithms", "BPPLIB"],
    contributions: [
      "Developed and evaluated an RL-guided HGGA approach for adaptive bin packing optimization.",
      "Benchmarked solution quality, runtime, and gap metrics across standard problem instances.",
      "Resulted in a research paper/article documenting the method, experiments, and findings."
    ],
    featured: true
  },
  {
    title: "CUDA Neural Network Training Optimization",
    categories: ["HPC", "Research", "AI"],
    icon: Cpu,
    article: "/hpc-project.pdf",
    description:
      "Research article studying CUDA kernel parallelization for shallow neural network training, moving from a synchronous global-memory baseline to a device-centric optimized pipeline.",
    technologies: ["CUDA", "C++", "Python", "Linux", "NVIDIA T4"],
    contributions: [
      "Analyzed bottlenecks caused by PCIe transfers, blocking synchronization, global-memory access, and CPU-side training steps.",
      "Compared persistent device memory, asynchronous CUDA streams, and tiled shared-memory kernels across dataset scales.",
      "Reported up to 1.74x speedup, reducing large-dataset training time from 31.05s to 17.82s on an NVIDIA T4 GPU."
    ],
    featured: true
  },
  {
    title: "Semantic Log Search Engine",
    categories: ["AI", "Big Data", "Software"],
    icon: Database,
    repo: "https://github.com/b-ikram/semantic-log-search",
    description:
      "A scalable Big Data pipeline for semantic similarity search and analytics over large-scale web server logs.",
    technologies: [
      "Apache Spark",
      "PostgreSQL",
      "pgvector",
      "Python",
      "Transformers",
      "FastAPI"
    ],
    contributions: [
      "Engineered a distributed log ingestion and preprocessing pipeline using Apache Spark, saving cleaned datasets in Parquet format.",
      "Generated 384-dimensional vector embeddings with sentence-transformers (all-MiniLM-L6-v2) for semantic search over unstructured log messages.",
      "Configured PostgreSQL with pgvector, constructing IVFFlat indexes for high-speed similarity search alongside analytical indexes on status and timestamps.",
      "Built a Web UI and CLI tool to perform semantic vs. keyword search comparisons, temporal error analysis, and recurrent HTTP error detection."
    ],
    featured: true
  },
  {
    title: "Modern Data Center for ESI",
    categories: ["Networks", "Cyber Security"],
    icon: Network,
    repo: "https://github.com/b-ikram/esi-containerlab-simulation",
    description:
      "Two-tier Clos spine-leaf data center fabric simulated in ContainerLab with EVPN/VXLAN, Arista EOS automation, VRF macro-segmentation, and layered security modeling.",
    technologies: ["Docker", "Linux", "Ansible", "BGP EVPN", "VXLAN"],
    contributions: [
      "Designed a modern data center topology with redundancy, segmentation, and automated configuration.",
      "Implemented AAA concepts with TACACS+, RADIUS, and OpenLDAP-backed access control.",
      "Modeled secure network behavior across routing, segmentation, and traffic policy decisions."
    ],
    featured: false
  },
  {
    title: "Agentic AI Ticketing Pipeline",
    categories: ["AI", "Software"],
    icon: Sparkles,
    repo: "https://github.com/b-ikram/TCXII-team-6",
    description:
      "Training Camp XII hackathon project for analyzing and responding to client support tickets with OCR, retrieval, multilingual handling, and automated escalation logic.",
    technologies: ["React", "FastAPI", "Python", "FAISS", "Mistral LLM"],
    contributions: [
      "Built the React interface and helped integrate the orchestrated ticket workflow.",
      "Supported multi-document processing for PDF, TXT, and image ticket inputs.",
      "Placed 2nd in the Agentic AI category at Training Camp XII."
    ],
    featured: false
  },
  {
    title: "Carbon Footprint Calculator",
    categories: ["Software", "Big Data"],
    icon: ShieldCheck,
    repo: "https://github.com/b-ikram/carbon-footprint-calculator",
    image: "/projects/carbon.jpg",
    description:
      "React-based analytical tool developed for a University of Boumerdes researcher to estimate product environmental impact from structured product data.",
    technologies: ["React", "JavaScript", "CSS", "JSON data"],
    contributions: [
      "Implemented product exploration and emissions comparison workflows.",
      "Organized structured product data for calculation and visualization.",
      "Designed an interface that makes environmental impact easier to inspect and compare."
    ],
    featured: false
  },
  {
    title: "ESIBOT Autonomous Mobile Robot",
    categories: ["Robotics", "AI", "Software"],
    icon: Cpu,
    repo: "https://github.com/b-ikram/ESIBOT",
    image: "/projects/esibot.jpg",
    description:
      "ROS2-based autonomous mobile robot platform combining hardware control, sensor fusion, computer vision, navigation, and a real-time React monitoring dashboard.",
    technologies: ["ROS2", "Python", "React", "OpenCV", "Raspberry Pi"],
    contributions: [
      "Led a team of 7 building a low-cost autonomous robot with a custom 3D-printed chassis.",
      "Engineered sensing, IMU odometry, motor control, video streaming, and teleoperation workflows.",
      "Kept robotics positioned as one applied systems project within a broader AI engineering portfolio."
    ],
    featured: false
  },
  {
    title: "Sonatrach Data Center Network & Security Simulation",
    categories: ["Networks", "Cyber Security"],
    icon: ShieldCheck, // Make sure ShieldCheck (or Network/Lock) is imported from 'lucide-react'
    article: "/RSPE_BADAOUI_SIQ1.pdf",
    description:
      "End-to-end design, virtualized simulation, and security analysis of a redundant Data Center network architecture for Sonatrach (Division Forage).",
    technologies: [
      "GNS3",
      "VMware",
      "Cisco IOS",
      "VPN",
      "DHCP/FTP/HTTP",
      "Kali Linux",
      "Network Security"
    ],
    contributions: [
      "Designed and simulated a high-availability Data Center architecture featuring core switch redundancy, service provisioning (HTTP, FTP, DHCP), and network supervision.",
      "Configured edge router security controls, traffic filtering policies, VPN tunnels, and proxy gateways for secure inter-divisional communication and internet access.",
      "Conducted security vulnerability assessments and simulated attack scenarios using Kali Linux tools to identify network flaws and implement hardening measures."
    ],
    featured: false
  }
];

export const designAreas = [
  "Motion Design",
  "Graphic Design",
  "UI/UX Design"
];

export const designTools = [
  "Adobe After Effects",
  "Adobe Illustrator",
  "Figma"
];

export const designSkills = [
  "Motion Design",
  "Graphic Design",
  "UI/UX Design",
  "Social Media Design",
  "Adobe After Effects",
  "Adobe Illustrator",
  "Figma",
  "Canva"
];

export const experiences = [
  {
    role: "Designer & Motion Designer",
    place: "ETIC, ESI Student Club",
    date: "Student Club Experience",
    points: [
      "Create visual identities, social media assets, motion graphics, and communication materials for student initiatives.",
      "Combine design judgment with technical thinking across branding, UI/UX, and digital content production."
    ]
  },
  {
    role: "Network & Security Engineering Intern",
    place: "Sonatrach, Drilling Division",
    date: "Aug 2025 - Sept 2025",
    points: [
      "Designed and simulated a data center architecture in GNS3 with VLAN/DMZ segmentation and secure VPN tunnels.",
      "Validated redundancy and security controls through attack simulations, DHCP scenarios, and HSRP/GLBP testing."
    ]
  },
  {
    role: "Agentic AI Hackathon Project",
    place: "Training Camp XII",
    date: "2026",
    points: [
      "Engineered an automated enterprise ticketing pipeline with multilingual support.",
      "Developed the React interface and integrated multi-agent OCR, FAISS RAG, and Mistral-LLM response logic."
    ]
  }
];

export const education = [
  {
    icon: GraduationCap,
    degree: "Computer Systems Engineering Student",
    institution: "ESI — Higher National School of Computer Science, Algiers",
    date: "Since 2022 - Expected June 2027",
    details:
      "Coursework and projects span artificial intelligence, cybersecurity, advanced networks, high-performance computing, software architecture, IoT, algorithm design, combinatorial optimization, and data analysis."
  },
  {
    icon: Trophy,
    degree: "Scientific Baccalaureate",
    institution: "Les Freres Drif High School, Boumerdes",
    date: "July 2022",
    details: "Grade: 17.98/20, Very Good Honors."
  }
];

export const achievements = [
  "Cisco CCNA 1, 2 & 3 - Routing, Switching, Security & Automation",
  "2nd Place - HACKTIC Hackathon by ETIC (2025)",
  "2nd Place, Agentic AI Category - Training Camp XII Hackathon (2026)",
  "Participant - Shellmates CTF (2025)",
  "Backend Development with FastAPI & PostgreSQL - Training Camp XI (2024)",
  "Introduction to Machine Learning in AWS Certificate- Amazon Web Services"

];

export const researchInterests = [
  "Reinforcement learning for adaptive combinatorial optimization",
  "Efficient AI systems and experimental model evaluation",
  "Secure, observable, and automated network infrastructures",
  "Human-centered AI products with strong software and interface design",
  "High-performance computing and scalable computational workflows"
];

export const designExperience = {
  icon: Palette,
  title: "Creative Skills",
  description:
    "I work at the intersection of motion, visuals, and interface thinking to create polished digital experiences with clarity and purpose.",
  points: [
    "Graphic Design",
    "Motion Design",
    "UI/UX Design",
    "Social Media Design",
    "Adobe After Effects",
    "Adobe Illustrator",
    "Figma",
    "Canva",
    "Designer and Motion Designer within ETIC, the student club at ESI"
  ]
};

export const contactLinks = [
  { label: "GitHub", href: profile.github, icon: Github, external: true },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin, external: true },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "Download CV", href: profile.cv, icon: GraduationCap, download: true }
];
