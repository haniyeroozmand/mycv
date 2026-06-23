"use client";

import { useApp } from "@/lib/app-context";
import { content, skills } from "@/lib/content";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import SkillIcon from "./SkillIcon";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  const { lang } = useApp();
  const t = content[lang];

  return (
    <section id="skills" className="scroll-mt-8 pt-16">
      <Reveal>
        <SectionTitle icon={Sparkles}>{t.skills.title}</SectionTitle>
      </Reveal>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s, i) => (
          <Reveal key={s.name} delay={0.04 * i}>
            <div className="glass group rounded-xl p-4 hover:-translate-y-1">
              <div className="flex items-center gap-2.5">
                <span
                  className="grid h-8 w-8 place-items-center rounded-lg transition-transform duration-300 ease-smooth group-hover:scale-110"
                  style={{ background: "var(--accent-soft)" }}
                >
                  <SkillIcon
                    name={s.icon}
                    className="h-4 w-4"
                    style={{ color: "var(--accent-text)" }}
                  />
                </span>
                <span
                  className="text-[13.5px] font-semibold"
                  style={{ color: "var(--text-strong)" }}
                >
                  {s.name}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <div className="bar-track h-1.5 flex-1 overflow-hidden rounded-full">
                  <motion.div
                    className="bar-fill h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.1 + i * 0.03,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
                <span
                  className="text-[11px] font-semibold tabular-nums"
                  style={{ color: "var(--text-muted)" }}
                >
                  {s.level}%
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
