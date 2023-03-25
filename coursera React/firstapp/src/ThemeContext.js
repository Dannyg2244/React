import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);

export const UserContext = ({children}) => {

    const [theme, setTheme] = useState("light")
    return (
    <ThemeContext.Provider value={{
        theme,
        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light")
    }}>
        {children}
    </ThemeContext.Provider>
    )
}

export const useUser = () => useContext(ThemeContext)