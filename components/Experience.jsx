"use client";

import { useApp } from "@/lib/app-context";
import { content } from "@/lib/content";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { Briefcase, FileText } from "lucide-react";

export default function Experience() {
  const { lang } = useApp();
  const t = content[lang];

  return (
    <section id="experience" className="scroll-mt-8 pt-16">
      <Reveal>
        <SectionTitle icon={Briefcase}>{t.experience.title}</SectionTitle>
      </Reveal>

      <div
        className="relative space-y-7 ps-6"
        style={{ borderInlineStart: "2px solid var(--panel-border)" }}
      >
        {t.experience.items.map((item, i) => (
          <Reveal key={i} delay={0.08 * i}>
            <div className="relative">
              {/* dot */}
              <span
                className="absolute top-1.5 grid h-3 w-3 place-items-center rounded-full"
                style={{
                  insetInlineStart: "-30px",
                  background: "var(--accent)",
                  boxShadow: "0 0 0 4px var(--accent-soft)",
                }}
              />
              <h3
                className="text-[15px] font-bold"
                style={{ color: "var(--text-strong)" }}
              >
                {item.role}
              </h3>
              <div className="mt-0.5 flex flex-wrap items-center gap-2 text-[12.5px]">
                <span style={{ color: "var(--accent-text)" }} className="font-semibold">
                  {item.company}
                </span>
                <span style={{ color: "var(--text-faint)" }}>•</span>
                <span style={{ color: "var(--text-muted)" }}>{item.period}</span>
              </div>
              <p
                className="mt-2 max-w-[640px] text-[13px] leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <a
          href="#"
          className="mt-7 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-semibold transition-all duration-300 ease-smooth hover:-translate-y-0.5"
          style={{
            background: "var(--panel)",
            border: "1px solid var(--panel-border)",
            color: "var(--text-strong)",
          }}
        >
          {t.experience.viewResume}
          <FileText className="h-4 w-4" />
        </a>
      </Reveal>
    </section>
  );
}
