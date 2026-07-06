import { FaMoon, FaSun, FaCircleHalfStroke } from "react-icons/fa6"
import { useTheme } from "../../providers/theme/useTheme";

const icons = {
  light: <FaSun aria-hidden="true" focusable="false"/>,
  dark: <FaMoon aria-hidden="true" focusable="false"/>,
  auto: <FaCircleHalfStroke aria-hidden="true" focusable="false"/>
};

function ThemeButton() {
  const {theme, setTheme} = useTheme();
  const icon = icons[theme];
  return (
    <>
      <button id="themeButton" popoverTarget="themePopover" aria-controls="themePopover">
        {icon} Alterar tema
      </button>
      <div id="themePopover" popover="">
        <button onClick={() => setTheme("light")}><FaSun aria-hidden="true" focusable="false"/>Tema claro</button>
        <button onClick={() => setTheme("dark")}><FaMoon aria-hidden="true" focusable="false"/>Tema escuro</button>
        <button onClick={() => setTheme("auto")}><FaCircleHalfStroke aria-hidden="true" focusable="false"/>Tema automático</button>
      </div>
    </>
  )
}

export default ThemeButton