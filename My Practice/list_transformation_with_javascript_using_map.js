const data = [
    {
    id : 1,
    place :"Abuja",
    description : "My location",
    price : "$80",
    },
    {
    id : 2,
    place :"Lagos",
    description : "My location",
    price : "$90",
    },
    {
    id : 3,
    place :"Ekiti",
    description : "My location",
    price : "$70",
    },
    {
    id : 4,
    place :"Ibadan",
    description : "My location",
    price : "$60",
    },
]

const topInfo = data.map(info => {
    return {
        content : `${info.place} & ${info.id}`,
        price : info.price,
    }
})

export default function App() {
    console.log(topInfo)
    return <h1>This is the story of the big boy</h1>
}