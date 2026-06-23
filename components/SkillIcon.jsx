// Simple, recognizable inline icons for each skill (kept lightweight).
import {
  Triangle,
  Atom,
  FileType,
  Wind,
  Hexagon,
  Palette,
  Code2,
  Leaf,
  Database,
  GitBranch,
  Container,
  Cloud,
} from "lucide-react";

const map = {
  nextjs: Triangle,
  react: Atom,
  typescript: FileType,
  tailwind: Wind,
  nodejs: Hexagon,
  design: Palette,
  api: Code2,
  mongodb: Leaf,
  postgres: Database,
  git: GitBranch,
  docker: Container,
  aws: Cloud,
};

export default function SkillIcon({ name, className = "" }) {
  const Icon = map[name] || Code2;
  return <Icon className={className} strokeWidth={1.75} />;
}
