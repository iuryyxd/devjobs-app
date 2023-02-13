import { createContext } from "react";

interface ThemeContextType {
  theme: string | null;
  setTheme: React.Dispatch<React.SetStateAction<string | null>>;
}

const iThemeContextState = {
  theme: null,
  setTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(iThemeContextState);
