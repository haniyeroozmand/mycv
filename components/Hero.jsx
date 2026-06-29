"use client";

import { useApp } from "@/lib/app-context";
import { content } from "@/lib/content";
import { motion } from "framer-motion";
import { Download, ArrowRight, Mail, Code2 } from "lucide-react";

export default function Hero() {
  const { lang } = useApp();
  const t = content[lang];

  return (
    <section id="home" className="scroll-mt-8 pt-4">
      {/* top baaaaar: availability + download */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12.5px]"
          style={{
            background: "var(--panel)",
            border: "1px solid var(--panel-border)",
            color: "var(--text-muted)",
          }}
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: "var(--green)", boxShadow: "0 0 8px var(--green)" }}
          />
          {t.available}
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          href="#"
          className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-[13px] font-semibold text-white transition-all duration-300 ease-smooth hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, var(--accent), var(--accent-text))",
            boxShadow: "0 8px 24px var(--accent-soft)",
          }}
        >
          <Download className="h-4 w-4" />
          {t.downloadResume}
        </motion.a>
      </div>

      <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: text */}
        <div>
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[15px] font-semibold"
            style={{ color: "var(--accent-text)" }}
          >
            {t.hero.greeting}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-1 text-[40px] font-extrabold leading-[1.05] tracking-tight md:text-[52px]"
            style={{ color: "var(--text-strong)" }}
          >
            {t.name}
            <span
              className="ms-1 inline-block w-[3px] animate-blink align-middle"
              style={{ height: "0.9em", background: "var(--accent)" }}
            />
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-2 text-[22px] font-bold md:text-[26px]"
            style={{ color: "var(--accent-text)" }}
          >
            {t.role}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 max-w-[460px] text-[14.5px] leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {t.hero.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[14px] font-semibold text-white transition-all duration-300 ease-smooth hover:-translate-y-0.5"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent), var(--accent-text))",
                boxShadow: "0 10px 30px var(--accent-soft)",
              }}
            >
              {t.hero.viewWork}
              <ArrowRight className="h-4 w-4 flip-x" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[14px] font-semibold transition-all duration-300 ease-smooth hover:-translate-y-0.5"
              style={{
                background: "var(--panel)",
                border: "1px solid var(--panel-border)",
                color: "var(--text-strong)",
              }}
            >
              {t.hero.contact}
              <Mail className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Right: code window mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative animate-float"
        >
          {/* glow */}
          <div
            className="absolute -inset-6 -z-10 rounded-[28px] animate-glow-pulse"
            style={{
              background:
                "radial-gradient(circle at 50% 60%, var(--glow), transparent 70%)",
              filter: "blur(20px)",
            }}
          />
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              background: "var(--panel-solid)",
              border: "1px solid var(--panel-border)",
              boxShadow: "0 20px 50px var(--shadow)",
            }}
          >
            <div className="flex items-center gap-2 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/90" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/90" />
              <span className="h-3 w-3 rounded-full bg-green-500/90" />
            </div>
            <div className="space-y-2.5 px-5 pb-6 pt-1">
              {[
                [60, "var(--accent)"],
                [85, "var(--text-faint)"],
                [70, "var(--accent-text)"],
                [50, "var(--text-faint)"],
                [78, "var(--green)"],
                [45, "var(--text-faint)"],
                [65, "var(--accent)"],
              ].map(([w, c], i) => (
                <motion.div
                  key={i}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: `${w}%`, opacity: 0.8 }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.08 }}
                  className="h-2.5 rounded-full"
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>

          {/* floating phone with code icon */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute -bottom-6 grid h-28 w-20 place-items-center rounded-2xl"
            style={{
              insetInlineEnd: "-12px",
              background: "var(--panel-solid)",
              border: "1px solid var(--panel-border)",
              boxShadow: "0 14px 36px var(--shadow)",
            }}
          >
            <Code2 className="h-7 w-7" style={{ color: "var(--accent-text)" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
