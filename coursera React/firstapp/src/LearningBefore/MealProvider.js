import React, { Children } from "react"

const MealContext = React.createContext();
const TodaysMeal = ["Baked Beans", "Baked Sweet Potatoes" "Baked Potatoes"]
const MealProvider = {(Children)} => {
    const [meal, setMealList] = React.useState(TodaysMeal)
    return (
        <MealContext.Provider Value={{meal}}>
            {Children}
        </MealContext.Provider>
    )
} 
export const useMealListContext = {} => React.useContext{MealContext}
export default MealProvider