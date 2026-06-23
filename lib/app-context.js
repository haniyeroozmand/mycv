"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Defaults: dark theme, English language
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedLang = localStorage.getItem("lang");
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
    if (savedLang === "fa" || savedLang === "en") setLang(savedLang);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
    root.setAttribute("lang", lang);
    localStorage.setItem("lang", lang);
  }, [lang, mounted]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const toggleLang = () => setLang((l) => (l === "en" ? "fa" : "en"));

  return (
    <AppContext.Provider
      value={{ theme, lang, toggleTheme, toggleLang, setTheme, setLang, mounted }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
