import { useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

import { Routes } from "./routes";

export default function App() {
  const [theme, setTheme] = useState<string>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme} className="app">
        <Routes />
      </div>
    </ThemeContext.Provider>
  );
}
