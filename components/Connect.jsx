"use client";

import { useApp } from "@/lib/app-context";
import { content } from "@/lib/content";
import Reveal from "./Reveal";
import { Users, Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Connect() {
  const { lang } = useApp();
  const t = content[lang];

  const socials = [
    { icon: Github, href: "https://github.com/", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
    { icon: Mail, href: "mailto:amanverma.dev@gmail.com", label: "Email" },
  ];

  return (
    <Reveal delay={0.15}>
      <div id="contact" className="glass scroll-mt-8 rounded-2xl p-5">
        <div className="mb-3 flex items-center gap-2.5">
          <Users className="h-5 w-5" style={{ color: "var(--accent-text)" }} />
          <h3 className="text-[16px] font-bold" style={{ color: "var(--text-strong)" }}>
            {t.connect.title}
          </h3>
        </div>
        <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {t.connect.body}
        </p>

        <a
          href="mailto:amanverma.dev@gmail.com"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-[13.5px] font-semibold text-white transition-all duration-300 ease-smooth hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, var(--accent), var(--accent-text))",
            boxShadow: "0 10px 26px var(--accent-soft)",
          }}
        >
          {t.connect.contact}
          <Mail className="h-4 w-4" />
        </a>

        <div className="mt-4 flex items-center gap-2.5">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-xl transition-all duration-300 ease-smooth hover:-translate-y-0.5"
              style={{
                background: "var(--panel)",
                border: "1px solid var(--panel-border)",
                color: "var(--text-muted)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent-text)";
                e.currentTarget.style.borderColor = "var(--panel-border-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.borderColor = "var(--panel-border)";
              }}
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
