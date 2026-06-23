"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 z-40 grid h-11 w-11 place-items-center rounded-full text-white transition-all duration-300 ease-smooth hover:-translate-y-1"
      style={{
        insetInlineEnd: 24,
        background: "linear-gradient(135deg, var(--accent), var(--accent-text))",
        boxShadow: "0 10px 26px var(--accent-soft)",
        opacity: show ? 1 : 0,
        pointerEvents: show ? "auto" : "none",
        transform: show ? "translateY(0)" : "translateY(16px)",
      }}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
