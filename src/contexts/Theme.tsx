import { createContext, ReactNode, useCallback, useContext, useState } from "react";

export enum Theme {
  Light = "light",
  Dark = "dark",
}

type ThemeContextValue = {
  currentTheme: Theme;
  changeTheme(theme: Theme): void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const themeStoreKey = "__CURRENT_THEME";

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return (window.localStorage.getItem(themeStoreKey) ?? Theme.Light) as Theme;
    } catch (error) {
      return Theme.Light;
    }
  });

  const changeTheme = useCallback((theme: Theme) => {
    setTheme(theme);

    try {
      window.localStorage.setItem(themeStoreKey, theme);
    } catch (error) {}
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: theme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("context must be provided before using");
  }
  return context;
}
