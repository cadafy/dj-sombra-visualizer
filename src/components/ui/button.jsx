// src/components/ui/button.jsx
export function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 transition ${className}`}
    >
      {children}
    </button>
  );
}