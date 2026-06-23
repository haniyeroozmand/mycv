"use client";

import { useEffect, useState } from "react";
import { useApp } from "@/lib/app-context";
import { content } from "@/lib/content";

import Sidebar from "@/components/Sidebar";
import MobileBar from "@/components/MobileBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import PersonalInfo from "@/components/PersonalInfo";
import Testimonials from "@/components/Testimonials";
import Education from "@/components/Education";
import Connect from "@/components/Connect";
import ScrollTop from "@/components/ScrollTop";
import Preloader from "@/components/Preloader";
import { Heart } from "lucide-react";

const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "testimonials",
  "contact",
];

export default function Page() {
  const { lang, mounted } = useApp();
  const t = content[lang];
  const [active, setActive] = useState("home");
  const [loading, setLoading] = useState(true);

  // Show the preloader once per browser session.
  useEffect(() => {
    const seen = sessionStorage.getItem("haniye-loaded");
    if (seen) {
      setLoading(false);
    }
  }, []);

  // Lock scroll while the preloader is visible.
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  const finishLoading = () => {
    sessionStorage.setItem("haniye-loaded", "1");
    setLoading(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [mounted]);

  return (
    <div className="min-h-screen">
      {loading && <Preloader onDone={finishLoading} />}

      <Sidebar active={active} />

      {/* Content area offset by sidebar width on desktop */}
      <main className="lg:ps-[180px]">
        <div className="mx-auto max-w-[1180px] px-4 pb-12 sm:px-6">
          <MobileBar />

          <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
            {/* Main column */}
            <div>
              <Hero />
              <About />
              <Skills />
              {/* Featured Projects moved up — right after Skills */}
              <Projects />
              <Experience />
            </div>

            {/* Right column (stacks below on mobile) */}
            <div className="space-y-6 lg:pt-4">
              <PersonalInfo />
              <Testimonials />
              <Education />
              <Connect />
            </div>
          </div>

          {/* Footer */}
          <footer
            className="mt-14 flex flex-col items-center gap-1 pt-8 text-center text-[12.5px]"
            style={{ borderTop: "1px solid var(--panel-border)", color: "var(--text-muted)" }}
          >
            <div className="flex items-center gap-1.5">
              {t.footer.builtWith}
              <Heart
                className="h-3.5 w-3.5"
                style={{ color: "var(--accent-text)", fill: "var(--accent-text)" }}
              />
              {t.footer.using}
            </div>
            <div style={{ color: "var(--text-faint)" }}>
              {t.footer.copyright} — {t.footer.rights}
            </div>
          </footer>
        </div>
      </main>

      <ScrollTop />
    </div>
  );
}
