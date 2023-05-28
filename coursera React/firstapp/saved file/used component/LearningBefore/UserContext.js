import React from "react"
import { createContext, useContext, useState } from "react"

const userContext = createContext(undefined)

export const userProvider = (children) => {
    const [user] = useState({
        name : "Daniel",
        student : "Coursera",
        email : "ikuyajolugbenga@gmail.com"
    })
    return (
        <userContext.Provider value={user}></userContext.Provider>
    )
}

export function useUser() {
    return useContext(userContext)
}