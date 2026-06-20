export default function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  fullWidth,
  onClick,
  type = "button",
  disabled = false,
}) {
  const cls = [
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? "btn--full" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <button
      type={type}
      className={cls}
      onClick={onClick}
      disabled={disabled}
      style={disabled ? { opacity: 0.6, cursor: "not-allowed" } : undefined}
    >
      {iconLeft}
      {children}
    </button>
  );
}
