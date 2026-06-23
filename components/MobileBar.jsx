"use client";

import { useApp } from "@/lib/app-context";
import { content } from "@/lib/content";
import { Sun, Moon, Languages } from "lucide-react";

export default function MobileBar() {
  const { lang, theme, toggleTheme, toggleLang } = useApp();
  const t = content[lang];

  return (
    <div
      className="sticky top-0 z-40 mb-4 flex items-center justify-between px-1 py-3 lg:hidden"
      style={{
        background: "var(--sidebar)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--sidebar-border)",
      }}
    >
      <div className="flex items-center gap-2.5">
        <img
          src="https://i.pravatar.cc/100?img=68"
          alt={t.name}
          className="h-9 w-9 rounded-full object-cover"
          style={{ border: "2px solid var(--accent)" }}
        />
        <div>
          <div className="text-[13px] font-bold" style={{ color: "var(--text-strong)" }}>
            {t.name}
          </div>
          <div className="text-[10.5px]" style={{ color: "var(--accent-text)" }}>
            {t.role}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="grid h-9 w-9 place-items-center rounded-lg"
          style={{
            background: "var(--panel)",
            border: "1px solid var(--panel-border)",
            color: "var(--text-muted)",
          }}
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
        <button
          onClick={toggleLang}
          aria-label="Toggle language"
          className="grid h-9 w-9 place-items-center rounded-lg text-[11px] font-bold"
          style={{
            background: "var(--panel)",
            border: "1px solid var(--panel-border)",
            color: "var(--text-muted)",
          }}
        >
          {lang === "en" ? "FA" : "EN"}
        </button>
      </div>
    </div>
  );
}
