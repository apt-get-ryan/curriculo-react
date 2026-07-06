import {
  createContext,
  useState,
  useEffect,
} from "react";

const ThemeContext = createContext();

function getTheme() {
  return document.body.dataset.theme;
}

function ThemeProvider({children}) {
  const [theme, setTheme] = useState(getTheme);
  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme])
  return (
    <ThemeContext value={{theme, setTheme}}>
      {children}
    </ThemeContext>
  )
}
export {ThemeProvider, ThemeContext};