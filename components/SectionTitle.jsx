"use client";

export default function SectionTitle({ icon: Icon, children }) {
  return (
    <div className="mb-6 flex items-center gap-2.5">
      <Icon className="h-5 w-5" style={{ color: "var(--accent-text)" }} strokeWidth={2} />
      <h2
        className="text-[20px] font-bold tracking-tight"
        style={{ color: "var(--text-strong)" }}
      >
        {children}
      </h2>
      <div
        className="ms-2 h-px flex-1"
        style={{
          background:
            "linear-gradient(90deg, var(--panel-border-hover), transparent)",
        }}
      />
    </div>
  );
}
