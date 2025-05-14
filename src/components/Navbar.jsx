import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Soft<span className="text-gray-800 dark:text-white">Sell</span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
