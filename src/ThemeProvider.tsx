import { ReactNode, useState } from "react";
import React from 'react'

import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }: any) => {
    const [theme, setTheme] = useState<string>("light");

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;   