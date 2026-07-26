import type { ComponentType, SVGProps } from "react";
import type { IconType } from "react-icons";
import {
  SiAngular,
  SiAnsible,
  SiApache,
  SiCisco,
  SiCss,
  SiDocker,
  SiFastapi,
  SiFigma,
  SiGit,
  SiGithub,
  SiGnometerminal,
  SiJavascript,
  SiJupyter,
  SiLinux,
  SiMqtt,
  SiNextdotjs,
  SiNvidia,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiRaspberrypi,
  SiReact,
  SiRos,
  SiScikitlearn,
  SiSelenium,
  SiTensorflow,
  SiTailwindcss,
  SiTypescript,
  SiVmware
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { TbBrandCpp, TbSql } from "react-icons/tb";

type TechIconComponent = IconType | ComponentType<SVGProps<SVGSVGElement> & { size?: number; color?: string }>;

function AdobeAfterEffectsIcon({ size = 16, color = "#9999ff", ...props }: SVGProps<SVGSVGElement> & { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect x="2" y="2" width="20" height="20" rx="4" fill={color} />
      <path d="M7 7.5h3.2c1.4 0 2.4.9 2.4 2.4 0 1.5-1 2.4-2.4 2.4H7V7.5Zm0 5.2h3.2c1.5 0 2.5 1 2.5 2.5s-1 2.5-2.5 2.5H7v-5Z" fill="#fff" />
      <path d="M15.5 7.5h2.2l2.4 7.8h-2.3l-.4-1.4h-2.2l-.4 1.4h-2.2l2.3-7.8Zm-.1 4.7.6-2.1.6 2.1h-1.2Z" fill="#fff" />
    </svg>
  );
}

function AdobeIllustratorIcon({ size = 16, color = "#ff9a00", ...props }: SVGProps<SVGSVGElement> & { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect x="2" y="2" width="20" height="20" rx="4" fill={color} />
      <path d="M8.2 7.6h2.1l2.7 7.8H10l-.4-1.3H7.9l-.4 1.3H5.5l2.7-7.8Zm-.8 4.4 1-3.2 1 3.2H7.4Z" fill="#fff" />
      <path d="M15.3 7.6h2.1l2.8 7.8h-2.1l-.4-1.2h-2.4l-.4 1.2h-2.1l2.5-7.8Zm-.8 4.3 1-3.2 1 3.2h-2Z" fill="#fff" />
    </svg>
  );
}

function FigmaIcon({ size = 16, color = "#f24e1e", ...props }: SVGProps<SVGSVGElement> & { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M8 3.5a3.5 3.5 0 1 0 0 7h2V3.5H8Zm0 0H6.5A3.5 3.5 0 0 0 3 7v0a3.5 3.5 0 0 0 3.5 3.5H8V3.5Zm4 0h2a3.5 3.5 0 1 1 0 7h-2V3.5Zm0 0h-2v7h2V3.5Zm-2 8h2a3.5 3.5 0 1 1 0 7h-2v-7Zm0 0H8a3.5 3.5 0 1 0 0 7h2v-7Z" fill={color} />
      <path d="M8 10.5h2v7H8a3.5 3.5 0 1 1 0-7Z" fill="#1abcfe" />
      <path d="M10 10.5h2v7h-2a3.5 3.5 0 1 1 0-7Z" fill="#0acf83" />
    </svg>
  );
}

const iconMap: Record<string, TechIconComponent> = {
  "Adobe After Effects": AdobeAfterEffectsIcon,
  "Adobe Illustrator": AdobeIllustratorIcon,
  Angular: SiAngular,
  Ansible: SiAnsible,
  "Apache Spark": SiApache,
  C: TbBrandCpp,
  "C++": TbBrandCpp,
  "Cisco IOS": SiCisco,
  CSS: SiCss,
  CUDA: SiNvidia,
  Docker: SiDocker,
  FastAPI: SiFastapi,
  Figma: FigmaIcon,
  Git: SiGit,
  GitHub: SiGithub,
  GNS3: SiGnometerminal,
  Java: FaJava,
  JavaScript: SiJavascript,
  Jupyter: SiJupyter,
  "Jupyter Notebook": SiJupyter,
  Linux: SiLinux,
  MQTT: SiMqtt,
  "Next.js": SiNextdotjs,
  "NVIDIA T4": SiNvidia,
  NumPy: SiNumpy,
  OpenCV: SiOpencv,
  Pandas: SiPandas,
  "PostgreSQL": SiPostgresql,
  Python: SiPython,
  PyTorch: SiPytorch,
  "Raspberry Pi": SiRaspberrypi,
  React: SiReact,
  ROS2: SiRos,
  "ROS2 Humble": SiRos,
  "Scikit-learn": SiScikitlearn,
  Selenium: SiSelenium,
  SQL: TbSql,
  "Tailwind CSS": SiTailwindcss,
  TensorFlow: SiTensorflow,
  TypeScript: SiTypescript,
  VMware: SiVmware
};

const brandColors: Record<string, string> = {
  Angular: "#dd0031",
  "Apache Spark": "#e25a1c",
  "Adobe After Effects": "#9999ff",
  "Adobe Illustrator": "#ff9a00",
  C: "#00599c",
  "C++": "#00599c",
  Canva: "#00c4cc",
  "Cisco IOS": "#1ba0d7",
  CSS: "#1572b6",
  CUDA: "#76b900",
  Docker: "#2496ed",
  FastAPI: "#009688",
  Figma: "#f24e1e",
  Git: "#f05032",
  GitHub: "#181717",
  Java: "#e76f00",
  JavaScript: "#f7df1e",
  Jupyter: "#f37626",
  Linux: "#111111",
  MQTT: "#660066",
  "Next.js": "#000000",
  "NVIDIA T4": "#76b900",
  NumPy: "#013243",
  OpenCV: "#5c3ee8",
  Pandas: "#150458",
  PostgreSQL: "#4169e1",
  Python: "#3776ab",
  PyTorch: "#ee4c2c",
  "Raspberry Pi": "#a22846",
  React: "#149eca",
  ROS2: "#22314e",
  "ROS2 Humble": "#22314e",
  "Scikit-learn": "#f7931e",
  Selenium: "#43b02a",
  SQL: "#336791",
  "Tailwind CSS": "#06b6d4",
  TensorFlow: "#ff6f00",
  TypeScript: "#3178c6",
  VMware: "#607078"
};

export function TechIcon({ name, compact = false }: { name: string; compact?: boolean }) {
  const Icon = iconMap[name];

  return (
    <span className="inline-flex items-center gap-2 border border-ruby/12 bg-white px-3 py-1.5 text-[0.72rem] font-semibold text-ruby shadow-sm transition hover:-translate-y-0.5 hover:border-ruby/30 hover:bg-blush">
      {Icon ? <Icon aria-hidden size={compact ? 14 : 16} color={brandColors[name]} /> : null}
      <span>{name}</span>
    </span>
  );
}
