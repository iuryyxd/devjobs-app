import { useEffect, useState } from "react";
import { FilterContext } from "./contexts/FilterContext";
import { ThemeContext } from "./contexts/ThemeContext";

import { Routes } from "./routes";

export interface filtersType {
  title: string;
  location: string;
  fullTime: boolean;
}

export default function App() {
  const [theme, setTheme] = useState<string>("light");
  const [filter, setFilter] = useState<filtersType>({
    title: "",
    location: "",
    fullTime: false,
  });

  useEffect(() => {
    document.body.style.background = theme === "dark" ? "#121721" : "#f4f6f8";
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <FilterContext.Provider value={{ filter, setFilter }}>
        <div data-theme={theme} className="app">
          <Routes />
        </div>
      </FilterContext.Provider>
    </ThemeContext.Provider>
  );
}
