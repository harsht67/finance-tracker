import { createContext } from "react";

export interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
}

const init = {
    theme: '',
    toggleTheme: () => {}
}

const ThemeContext = createContext<ThemeContextProps>(init);

export default ThemeContext;