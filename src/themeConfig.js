import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark((prevValue) => !prevValue);
  };

  const theme = dark ? "dark" : "light";

  useEffect(() => {
    if (window.matchMedia("prefers-color-scheme:dark").matches) {
      setDark(true);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
