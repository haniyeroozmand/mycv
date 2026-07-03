"use client";

import { useApp } from "@/lib/app-context";
import { content } from "@/lib/content";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Sparkles,
  Briefcase,
  FolderGit2,
  GraduationCap,
  MessageSquareQuote,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Sun,
  Moon,
  Languages,
} from "lucide-react";

const navIcons = {
  home: Home,
  about: User,
  skills: Sparkles,
  projects: FolderGit2,
  experience: Briefcase,
  education: GraduationCap,
  testimonials: MessageSquareQuote,
  contact: Mail,
};

// Order matches the design (Projects sits in the nav between Skills & Experience)
const navOrder = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "testimonials",
  "contact",
];

export default function Sidebar({ active }) {
  const { lang, theme, toggleTheme, toggleLang } = useApp();
  const t = content[lang];

  const socials = [
    { icon: Github, href: "https://github.com/", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/haniye-roozmand-541721296/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:haniyerz79@gmail.com", label: "Email" },
  ];

  return (
    <aside
      className="hidden lg:flex fixed top-0 z-30 h-screen w-[180px] flex-col"
      style={{
        insetInlineStart: 0,
        background: "var(--sidebar)",
        borderInlineEnd: "1px solid var(--sidebar-border)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div className="flex flex-col items-center px-5 pt-8 pb-6">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            className="h-[88px] w-[88px] rounded-full p-[2px]"
            style={{
              background:
                "conic-gradient(from 180deg, var(--accent), var(--accent-text), var(--accent))",
            }}
          >
            <img
              src="/img/me.webp"
              alt={t.name}
              className="h-full w-full rounded-full object-cover"
              style={{ background: "var(--panel-solid)" }}
            />
          </div>
          <span
            className="absolute bottom-1 h-3.5 w-3.5 rounded-full"
            style={{
              insetInlineEnd: 4,
              background: "var(--green)",
              border: "2px solid var(--sidebar)",
              boxShadow: "0 0 8px var(--green)",
            }}
          />
        </motion.div>

        <h1
          className="mt-3 text-[15px] font-bold tracking-tight"
          style={{ color: "var(--text-strong)" }}
        >
          {t.name}
        </h1>
        <p className="text-[12px]" style={{ color: "var(--accent-text)" }}>
          {t.role}
        </p>

        {/* Socials */}
        <div className="mt-4 flex items-center gap-2.5">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noreferrer"
              className="grid h-8 w-8 place-items-center rounded-lg transition-all duration-300 ease-smooth hover:-translate-y-0.5"
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

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3">
        <ul className="space-y-1">
          {navOrder.map((key) => {
            const Icon = navIcons[key];
            const isActive = active === key;
            return (
              <li key={key}>
                <a
                  href={`#${key}`}
                  className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13.5px] font-medium transition-all duration-300 ease-smooth"
                  style={{
                    background: isActive ? "var(--nav-active)" : "transparent",
                    color: isActive ? "var(--accent-text)" : "var(--text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "var(--nav-active)";
                      e.currentTarget.style.color = "var(--text-strong)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "var(--text-muted)";
                    }
                  }}
                >
                  <Icon className="h-[18px] w-[18px] shrink-0" strokeWidth={1.9} />
                  <span>{t.nav[key]}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="ms-auto h-1.5 w-1.5 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Theme + Language toggles */}
      <div
        className="flex items-center justify-center gap-2 px-3 py-4"
        style={{ borderTop: "1px solid var(--sidebar-border)" }}
      >
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-[12px] font-medium transition-all duration-300 ease-smooth hover:-translate-y-0.5"
          style={{
            background: "var(--panel)",
            border: "1px solid var(--panel-border)",
            color: "var(--text-muted)",
          }}
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>
        <button
          onClick={toggleLang}
          aria-label="Toggle language"
          className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-[12px] font-semibold transition-all duration-300 ease-smooth hover:-translate-y-0.5"
          style={{
            background: "var(--panel)",
            border: "1px solid var(--panel-border)",
            color: "var(--text-muted)",
          }}
        >
          <Languages className="h-4 w-4" />
          {lang === "en" ? "FA" : "EN"}
        </button>
      </div>
    </aside>
  );
}
