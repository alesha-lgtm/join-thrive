export default function Eyebrow({ children, align = "left" }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        justifyContent: align === "center" ? "center" : "flex-start",
      }}
    >
      <span style={{ width: 28, height: 1, background: "var(--sage-400)" }} />
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 12,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--sage-600)",
          fontWeight: 500,
        }}
      >
        {children}
      </span>
    </div>
  );
}
