/** @format */

import { createContext, useContext, useEffect, useState } from "react";

// 0 - Initial State
const initialState = { theme: "system", setTheme: () => null };

// 1 - Context Creation
const ThemeProviderContext = createContext(initialState);

// 2 - ThemeContext Provider Creation
const ThemeProvider = ({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}) => {
  const [theme, setTheme] = useState(() => {
    // Get the theme from localStorage or fallback to default
    return localStorage.getItem(storageKey) || defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;

    // Remove previous theme classes
    root.classList.remove("light", "dark");

    if (theme === "system") {
      // Detect the system theme preference (dark/light)
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      // Add the user-selected theme (light/dark)
      root.classList.add(theme);
    }
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme) => {
      localStorage.setItem(storageKey, newTheme); // Store in localStorage
      setTheme(newTheme); // Update the state
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
