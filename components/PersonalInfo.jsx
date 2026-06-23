"use client";

import { useApp } from "@/lib/app-context";
import { content } from "@/lib/content";
import Reveal from "./Reveal";
import { UserCircle2 } from "lucide-react";

export default function PersonalInfo() {
  const { lang } = useApp();
  const t = content[lang];

  return (
    <Reveal>
      <div id="personal-info" className="glass rounded-2xl p-5">
        <div className="mb-4 flex items-center gap-2.5">
          <UserCircle2 className="h-5 w-5" style={{ color: "var(--accent-text)" }} />
          <h3 className="text-[16px] font-bold" style={{ color: "var(--text-strong)" }}>
            {t.personalInfo.title}
          </h3>
        </div>
        <ul className="space-y-3">
          {t.personalInfo.rows.map((row, i) => (
            <li key={i} className="flex items-start justify-between gap-3 text-[13px]">
              <span style={{ color: "var(--text-muted)" }}>{row.label}</span>
              <span
                className="text-end font-medium"
                style={{
                  color: row.highlight ? "var(--green)" : "var(--text-strong)",
                  direction: "ltr",
                }}
              >
                {row.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
