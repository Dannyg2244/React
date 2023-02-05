const topDesert = [
    {
        id : 12,
        place : "Ketu",
        description : "this is the loudest place i have never go to"
        color : "Red"
    },
    {
        id : 13,
        place : "ikeja",
        description : "My lesson venue"
        color : "Green"
    },
    {
        id : 14,
        place : "Bariga",
        description : "Where i stay"
        color : "Blue"
    },
    {
        id : 15,
        place : "Oshodi",
        description : "the most funniest people ever"
        color : "purple"
    },
]

const listItem = topDesert.map(item => {
    const dataItem = `${place} - ${description} - ${color}`
    return <li>{dataItem}</li>
})

export default function App() {
    return (
        <div>
            <ul>
                <li>{listItem}</li>
            </ul>
        </div>
    )
}