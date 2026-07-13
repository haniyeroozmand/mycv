"use client";

import { useApp } from "@/lib/app-context";
import { content } from "@/lib/content";
import Reveal from "./Reveal";
import { Quote } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const { lang } = useApp();
  const t = content[lang];
  const items = t.testimonials.items;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((p) => (p + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, [items.length]);

  const avatars = [
    "/img/images (4).png",
    "/img/images (4).png",
    "/img/images (4).png",

  ];

  return (
    <Reveal delay={0.05}>
      <div id="testimonials" className="glass rounded-2xl p-5">
        <div className="mb-3 flex items-center gap-2.5">
          <Quote className="h-5 w-5" style={{ color: "var(--accent-text)" }} />
          <h3 className="text-[16px] font-bold" style={{ color: "var(--text-strong)" }}>
            {t.testimonials.title}
          </h3>
        </div>

        <div className="relative min-h-[170px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <p
                className="text-[13.5px] leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                “{items[idx].quote}”
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src={avatars[idx]}
                  alt={items[idx].name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <div
                    className="text-[13.5px] font-bold"
                    style={{ color: "var(--text-strong)" }}
                  >
                    {items[idx].name}
                  </div>
                  <div className="text-[11.5px]" style={{ color: "var(--text-muted)" }}>
                    {items[idx].position}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-4 flex items-center gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setIdx(i)}
              className="h-1.5 rounded-full transition-all duration-300 ease-smooth"
              style={{
                width: i === idx ? 22 : 8,
                background: i === idx ? "var(--accent)" : "var(--track)",
              }}
            />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
