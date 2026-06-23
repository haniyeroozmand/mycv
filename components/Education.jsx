"use client";

import { useApp } from "@/lib/app-context";
import { content } from "@/lib/content";
import Reveal from "./Reveal";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const { lang } = useApp();
  const t = content[lang];

  return (
    <Reveal delay={0.1}>
      <div id="education" className="glass rounded-2xl p-5">
        <div className="mb-4 flex items-center gap-2.5">
          <GraduationCap className="h-5 w-5" style={{ color: "var(--accent-text)" }} />
          <h3 className="text-[16px] font-bold" style={{ color: "var(--text-strong)" }}>
            {t.education.title}
          </h3>
        </div>

        <div
          className="space-y-5 ps-5"
          style={{ borderInlineStart: "2px solid var(--panel-border)" }}
        >
          {t.education.items.map((e, i) => (
            <div key={i} className="relative">
              <span
                className="absolute top-1.5 h-2.5 w-2.5 rounded-full"
                style={{
                  insetInlineStart: "-26px",
                  background: "var(--accent)",
                  boxShadow: "0 0 0 4px var(--accent-soft)",
                }}
              />
              <h4
                className="text-[13.5px] font-bold"
                style={{ color: "var(--text-strong)" }}
              >
                {e.degree}
              </h4>
              <p className="text-[12.5px]" style={{ color: "var(--text-muted)" }}>
                {e.school}
              </p>
              <p className="text-[11.5px]" style={{ color: "var(--text-faint)" }}>
                {e.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
