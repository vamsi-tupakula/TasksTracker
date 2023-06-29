import React from "react";

export default function Header({ theme, setTheme }) {
  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="mb-3 pt-2 pb-1 d-flex align-items-center justify-content-between">
      <h3 className="mt-3 text-center app-title">Tasks Tracker 🚀</h3>
      <button
        className={`mt-3 btn bg-info-subtle text-dark fw-bold`}
        onClick={handleTheme}
      >
        {theme === "light" ? "DARK" : "LIGHT"}
      </button>
    </div>
  );
}
