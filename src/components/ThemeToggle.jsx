import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    if (darkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme");
    }
  }, [darkMode]);


  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full border border-gray-300 dark:border-gray-600"
      title="Toggle light/dark mode"
    >
      {darkMode ? "🌞" : "🌙"}
    </button>
  );
}
