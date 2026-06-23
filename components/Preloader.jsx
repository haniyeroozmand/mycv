"use client";

import { useApp } from "@/lib/app-context";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// A playful "code editor compiling" preloader.
// It types out a few lines, runs a fake build, then says welcome.
const linesEn = [
  { t: "$ ", c: "const developer = ", k: "await", e: " hire();", delay: 0 },
  { t: "$ ", c: "import ", k: "{ creativity, coffee } ", e: "from 'soul';", delay: 1 },
  { t: "$ ", c: "building ", k: "Haniye", e: "'s portfolio...", delay: 2 },
  { t: "$ ", c: "compiling components ", k: "✓", e: "", delay: 3 },
  { t: "$ ", c: "optimizing vibes ", k: "✓", e: "", delay: 4 },
];

const linesFa = [
  { t: "$ ", c: "const developer = ", k: "await", e: " hire();", delay: 0 },
  { t: "$ ", c: "import ", k: "{ خلاقیت, قهوه } ", e: "from 'soul';", delay: 1 },
  { t: "$ ", c: "ساخت پورتفولیوی ", k: "Haniye", e: " ...", delay: 2 },
  { t: "$ ", c: "کامپایل کامپوننت‌ها ", k: "✓", e: "", delay: 3 },
  { t: "$ ", c: "بهینه‌سازی حال‌وهوا ", k: "✓", e: "", delay: 4 },
];

export default function Preloader({ onDone }) {
  const { lang } = useApp();
  const isFa = lang === "fa";
  const lines = isFa ? linesFa : linesEn;

  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const timers = [];
    // reveal lines one by one
    lines.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleLines(i + 1), 350 + i * 420));
    });
    // progress bar
    let p = 0;
    const prog = setInterval(() => {
      p = Math.min(100, p + Math.random() * 9 + 4);
      setProgress(Math.round(p));
      if (p >= 100) clearInterval(prog);
    }, 110);
    // welcome screen
    timers.push(setTimeout(() => setShowWelcome(true), 2600));
    // leave
    timers.push(setTimeout(() => setLeaving(true), 3900));
    timers.push(setTimeout(() => onDone && onDone(), 4500));

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(prog);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {!leaving && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center px-6"
          style={{ background: "var(--bg)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* ambient glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(700px circle at 50% 40%, var(--glow), transparent 60%)",
              opacity: 0.5,
            }}
          />

          <AnimatePresence mode="wait">
            {!showWelcome ? (
              <motion.div
                key="terminal"
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-[480px] overflow-hidden rounded-2xl"
                style={{
                  background: "var(--panel-solid)",
                  border: "1px solid var(--panel-border)",
                  boxShadow: "0 30px 70px var(--shadow)",
                  direction: "ltr",
                }}
              >
                {/* title bar */}
                <div
                  className="flex items-center gap-2 px-4 py-3"
                  style={{ borderBottom: "1px solid var(--panel-border)" }}
                >
                  <span className="h-3 w-3 rounded-full bg-red-500/90" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/90" />
                  <span className="h-3 w-3 rounded-full bg-green-500/90" />
                  <span
                    className="ms-3 text-[12px] font-medium"
                    style={{ color: "var(--text-faint)" }}
                  >
                    haniye — portfolio.tsx
                  </span>
                </div>

                {/* code body */}
                <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed">
                  {lines.slice(0, visibleLines).map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-wrap items-center gap-1"
                    >
                      <span style={{ color: "var(--green)" }}>{line.t}</span>
                      <span style={{ color: "var(--text-muted)" }}>{line.c}</span>
                      <span style={{ color: "var(--accent-text)" }}>{line.k}</span>
                      <span style={{ color: "var(--text-muted)" }}>{line.e}</span>
                    </motion.div>
                  ))}
                  {/* blinking cursor on current line */}
                  {visibleLines < lines.length && (
                    <span
                      className="inline-block h-4 w-2 animate-blink align-middle"
                      style={{ background: "var(--accent)" }}
                    />
                  )}

                  {/* progress */}
                  <div className="mt-4 flex items-center gap-3">
                    <div className="bar-track h-1.5 flex-1 overflow-hidden rounded-full">
                      <motion.div
                        className="bar-fill h-full rounded-full"
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear" }}
                      />
                    </div>
                    <span
                      className="text-[11px] font-semibold tabular-nums"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {progress}%
                    </span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative text-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 14,
                    delay: 0.1,
                  }}
                  className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-2xl font-mono text-2xl font-bold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent), var(--accent-text))",
                    boxShadow: "0 20px 50px var(--accent-soft)",
                  }}
                >
                  {"</>"}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="font-mono text-[13px]"
                  style={{ color: "var(--accent-text)" }}
                >
                  {isFa ? "// بیلد با موفقیت انجام شد 🎉" : "// build successful 🎉"}
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mt-2 text-[30px] font-extrabold tracking-tight md:text-[40px]"
                  style={{ color: "var(--text-strong)" }}
                >
                  {isFa ? (
                    <>
                      به سایت{" "}
                      <span style={{ color: "var(--accent-text)" }}>Haniye</span> خوش
                      اومدی!
                    </>
                  ) : (
                    <>
                      Welcome to{" "}
                      <span style={{ color: "var(--accent-text)" }}>Haniye</span>'s site!
                    </>
                  )}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-2 text-[14px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {isFa
                    ? "یه قهوه دستت بگیر و لذت ببر ☕"
                    : "Grab a coffee and enjoy ☕"}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
