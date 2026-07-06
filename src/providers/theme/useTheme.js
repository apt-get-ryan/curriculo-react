import { ThemeContext } from "./ThemeProvider.jsx";
import { useContext } from "react";

export function useTheme() {
  return useContext(ThemeContext);
}