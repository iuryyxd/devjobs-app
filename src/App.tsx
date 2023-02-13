import { useState } from "react";
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
