"use client";

import { useApp } from "@/lib/app-context";
import { content } from "@/lib/content";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MobileBar() {
  const { lang, theme, toggleTheme, toggleLang } = useApp();
  const t = content[lang];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 1);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`no-print fixed left-0 right-0 z-40 flex flex-col items-center px-4 transition-[top] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] sm:px-6 lg:hidden ${
        scrolled ? "top-3" : "top-0"
      }`}
    >
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`flex items-center justify-between w-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          scrolled
            ? "max-w-sm px-4 py-2.5 rounded-full"
            : "px-4 py-3 rounded-b-[1.5rem]"
        }`}
        style={{
          background: "#070b14a1",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(24px)",
          borderLeft: "1px solid var(--sidebar-border)",
          borderRight: "1px solid var(--sidebar-border)",
          borderBottom: "1px solid var(--sidebar-border)",
          borderTop: scrolled ? "1px solid var(--sidebar-border)" : "none",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.08)"
            : "0 4px 16px rgba(0,0,0,0.08)",
        }}
      >
        <div className="flex items-center gap-2.5">
          <img
            src="/img/me2.webp"
            alt={t.name}
            className={`rounded-full object-cover transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              scrolled ? "h-[45px] w-[45px]" : "h-9 w-9"
            }`}
            style={{ border: "2px solid var(--accent)" }}
          />

          <div className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${scrolled ? "max-w-0 " : "max-w-xs "}`}>
            <div className="text-[13px] font-bold whitespace-nowrap" style={{ color: "var(--text-strong)" }}>
              {t.name}
            </div>
            <div className="text-[10.5px] whitespace-nowrap" style={{ color: "var(--accent-text)" }}>
              {t.role}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`grid place-items-center rounded-lg transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              scrolled ? "h-7 w-7" : "h-9 w-9"
            }`}
            style={{
              background: "var(--panel)",
              border: "1px solid var(--panel-border)",
              color: "var(--text-muted)",
            }}
          >
            {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className={`grid place-items-center rounded-lg text-[11px] font-bold transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              scrolled ? "h-7 w-7" : "h-9 w-9"
            }`}
            style={{
              background: "var(--panel)",
              border: "1px solid var(--panel-border)",
              color: "var(--text-muted)",
            }}
          >
            {lang === "en" ? "FA" : "EN"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
