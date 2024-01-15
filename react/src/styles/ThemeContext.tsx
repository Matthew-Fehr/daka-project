import { createContext, useState, useContext } from "react";
import { ThemeProvider } from "@mui/system";
import baseTheme from "./themes/baseTheme";

/**
 * checks whether localStorage is empty. if yes uses light as default theme
 * if prefered color scheme is dark uses dark as default theme
 * @returns theme
 */
function checkLocalStorage() {
    const storedTheme = localStorage.getItem("theme");
    const defaultDark =
        storedTheme === "dark" ||
        (storedTheme === null && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (defaultDark) {
        localStorage.setItem("theme", "dark");
    }
    if (localStorage.getItem("theme") === null || localStorage.getItem("theme") === "light") {
        localStorage.setItem("theme", "light");
        return baseTheme;
    }
    return baseTheme;
}

export const SetThemeContext = createContext<React.Dispatch<React.SetStateAction<typeof baseTheme>> | undefined>(
    undefined,
);

export const useTheme = () => {
    const setTheme = useContext(SetThemeContext);
    if (!setTheme) {
        // throw new Error("setTheme was called outside of the AllSkillsFilterProvider");
        localStorage.setItem("theme", "light");
    }
    return setTheme;
};

function ThemeProviderCustom({ children }: any) {
    const [theme, setTheme] = useState(checkLocalStorage);
    return (
        <ThemeProvider theme={theme}>
            <SetThemeContext.Provider value={setTheme}>{children}</SetThemeContext.Provider>
        </ThemeProvider>
    );
}

export default ThemeProviderCustom;
