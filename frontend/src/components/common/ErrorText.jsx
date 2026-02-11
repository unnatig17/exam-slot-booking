export default function ErrorText({ message }) {
  if (!message) return null;
  return <div className="error-text">{message}</div>;
}
