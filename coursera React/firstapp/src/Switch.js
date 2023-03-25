import {useUser } from "./ThemeContext";
import React from "react";

export const Switch = () => {
    const {theme, toggleTheme} = useUser()
    return (
        
            <label>
                <input 
                type="checkbox"
                checked={theme === "light"}
                onChange={toggleTheme}
                />
            </label>
        
    )
}