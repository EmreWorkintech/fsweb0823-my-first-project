import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const SiteGlobalContext = createContext();

export const SiteGlobalProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [lang, setLang] = useLocalStorage("lang", "tr");

  const toggleDarkMode = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <SiteGlobalContext.Provider
      value={{ theme, toggleDarkMode, lang, setLang }}
    >
      {children}
    </SiteGlobalContext.Provider>
  );
};
