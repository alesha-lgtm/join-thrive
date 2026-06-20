export default function Input({ label, type = "text", placeholder, name }) {
  return (
    <label style={{ display: "block" }}>
      {label && <span className="field-label">{label}</span>}
      <input
        className="field-input"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
}
