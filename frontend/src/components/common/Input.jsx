export default function Input({ label, type = "text", value, onChange }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>{label}</label>
      <br />
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
}
