import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext({
  theme: "",
  toggleTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleTheme = () => {
    setTheme(prevTheme => (prevTheme === "dark"? "light" : "dark"));
  };

  const ctxValue = {
    theme: theme,
    toggleTheme: handleTheme,
  };
  return (
    <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
