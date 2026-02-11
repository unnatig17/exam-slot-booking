export default function Button({ text, onClick, disabled, variant = "primary", size = "md", icon }) {
  const buttonClass = `btn-${variant} btn-${size}`;
  
  return (
    <button 
      className={buttonClass}
      onClick={onClick} 
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
}
