"use client";

import { useEffect, useState } from "react";
import { useApp } from "@/lib/app-context";
import { content, projects } from "@/lib/content";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { FolderGit2, ArrowRight, ExternalLink, Github, Maximize2, X } from "lucide-react";

export default function Projects() {
  const { lang } = useApp();
  const t = content[lang];
  const [activeProject, setActiveProject] = useState(null);
  const modalText = lang === "fa" ? "مشاهده تصویر" : "View image";

  useEffect(() => {
    if (!activeProject) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveProject(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  return (
    <section id="projects" className="scroll-mt-8 pt-16">
      <Reveal>
        <div className="flex items-center justify-between">
          <SectionTitle icon={FolderGit2}>{t.projects.title}</SectionTitle>
          <a
            href="#"
            className="ms-4 hidden shrink-0 items-center gap-1.5 text-[13px] font-semibold transition-all duration-300 ease-smooth hover:gap-2.5 sm:inline-flex"
            style={{ color: "var(--accent-text)" }}
          >
            {t.projects.viewAll}
            <ArrowRight className="h-4 w-4 flip-x" />
          </a>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={0.08 * i}>
            <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl hover:-translate-y-1.5">
              {/* Screenshot that scrolls down on hover */}
              <button
                type="button"
                onClick={() => setActiveProject(p)}
                className="shot-frame block h-[170px] w-full cursor-zoom-in text-start"
                title={modalText}
                aria-label={`${modalText}: ${p.title}`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="shot-img"
                  loading="lazy"
                  onError={(e) => {
                    // graceful fallback if screenshot missing
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.style.background =
                      "linear-gradient(135deg, var(--accent-soft), transparent)";
                  }}
                />
                {/* hover overlay hint */}
                <span
                  className="pointer-events-none absolute inset-0 flex items-end justify-center pb-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.55), transparent 55%)",
                  }}
                >
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-slate-900">
                    <Maximize2 className="h-3 w-3" />
                    {modalText}
                  </span>
                </span>
              </button>

              <div className="flex flex-1 flex-col p-4">
                <h3
                  className="text-[15px] font-bold"
                  style={{ color: "var(--text-strong)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="mt-1 text-[12.5px] leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {lang === "fa" ? p.descFa : p.descEn}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="chip rounded-md px-2 py-0.5 text-[10.5px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-4 pt-3" style={{ borderTop: "1px solid var(--panel-border)" }}>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold transition-colors duration-300"
                    style={{ color: "var(--accent-text)" }}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    {t.projects.liveDemo}
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[12.5px] font-medium transition-colors duration-300 hover:opacity-80"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <Github className="h-3.5 w-3.5" />
                    {t.projects.github}
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.title}
          onClick={() => setActiveProject(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-lg transition-transform hover:scale-105"
            onClick={() => setActiveProject(null)}
            aria-label={lang === "fa" ? "بستن" : "Close"}
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="max-h-[86vh] max-w-[94vw] overflow-auto rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="block max-w-full rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
