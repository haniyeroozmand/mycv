"use client";

import { useApp } from "@/lib/app-context";
import { content } from "@/lib/content";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { User, Award, CheckCircle2, Users } from "lucide-react";

const statIcons = [Award, CheckCircle2, Users];

export default function About() {
  const { lang } = useApp();
  const t = content[lang];

  return (
    <section id="about" className="scroll-mt-8 pt-16">
      <Reveal>
        <SectionTitle icon={User}>{t.about.title}</SectionTitle>
      </Reveal>

      <Reveal delay={0.05}>
        <p
          className="max-w-[640px] text-[14.5px] leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {t.about.body}
        </p>
      </Reveal>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {t.about.stats.map((s, i) => {
          const Icon = statIcons[i];
          return (
            <Reveal key={i} delay={0.1 + i * 0.08}>
              <div className="glass group flex items-center gap-3 rounded-xl px-4 py-4 hover:-translate-y-1">
                <div
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-lg transition-transform duration-300 ease-smooth group-hover:scale-110"
                  style={{ background: "var(--accent-soft)" }}
                >
                  <Icon className="h-5 w-5" style={{ color: "var(--accent-text)" }} />
                </div>
                <div>
                  <div
                    className="text-[20px] font-extrabold leading-none"
                    style={{ color: "var(--text-strong)" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="mt-1 text-[12px]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {s.label}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
