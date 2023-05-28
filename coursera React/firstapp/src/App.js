/*import React from "react"

const data = [
    {
        id: 14,
        title: "The homeless boy",
        description: "The homeless boy is not a girl",
        venue: "Bariga",
        price: "$40",
    },
    {
        id: 15,
        title: "The homeless girl",
        description: "The homeless girl is not a boy",
        venue: "Badagry",
        price: "$50",
    },
    {
        id: 12,
        title: "The homeless baby",
        description: "The homeless baby is not a girl",
        venue: "shomolu",
        price: "$40",
    }
]



export default function App() {
    const details = data.filter(detail => {
        return detail.id < 16
    })
    .sort((a, b) => {
        return a.id - b.id
    })
    .map((detail) => {
        return <li>{detail.id} - {detail.title} - {detail.description}</li>
    })
    console.log(details);
    return (
        <div>
            <h1>The list of object needed</h1>
        <ul>
            <li>{details}</li>
        </ul>
        </div>
    )
}
*/
/*
//Using key with List Component
import React from "react"
import { useState } from "react"

const Todo = (props) => {
    return (
        <tr>
            <td>
                <label>{props.id}</label>
            </td>
            <td>
                <input type="text"/>
            </td>
            <td>
                <label>
                    {props.createdAt}
                </label>
            </td>
        </tr>
    )
}

export default function App() {
    const [todos, setTodos] = useState(
       [ {
            id: "todo1",
            createdAt: "$12.00",
        },
        {
            id: "todo2",
            createdAt: "$18.00",
        }]
    )

    const handleClick = () => {
        setTodos([...todos].reverse())
    }

    return (
        <div>
            <button onClick={handleClick}>reverse</button>
            <table>
                <tbody>
                    {todos.map((todo, index) => {
                        return <Todo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
                    })}
                </tbody>
            </table>
        </div>
    );
}
*/
//creating context internally
/*import React, {createContext, useState, useContext} from "react"


const MyContext = createContext(undefined)
function App() {
    const [contextValue, setContextValue] = useState({
        name: "initial",
        baby: "over her baby"
    })

    return(
        <MyContext.Provider value={contextValue}>
            <>
            <h1>My App</h1>
            <button onClick={() => setContextValue("Updated")}>
                Clickme
            </button>
            <ChildComponent />
            <BabyComponent />
            </>
        </MyContext.Provider>
    )
}

const ChildComponent = () => {
    const contextValue = useContext(MyContext)
    return (
        <>
            <p>This is my {contextValue.name} app content creator</p>
        </>
    )
}


const BabyComponent = () => {
    const contextValue = useContext(MyContext)
    return (
        <>
            <h3>my story</h3>
            <p>i was going to my house on a very faithful day suddenly i heard {contextValue.baby}</p>
        </>
    )
}

export default App
*/

//creating theme switcher
/*
import { UserContext, useUser} from "./ThemeContext";
import { Switch } from "./Switch";
import React from "react";

const Title = ({children}) => {
    const {theme} = useUser()
    return (
            <p style={{
                color: theme === "light" ? "black" : "white"}}>
                {children}
            </p>
    )
}

const Head = ({children}) => {
    const {theme} = useUser()
    return (
            <h1
            style={{
                color: theme === "light" ? "black" : "white"
            }}
            >
                {children}
            </h1>
    )
}

const Paragraph = () => {
    return (
        <main>
        <Title>
        Little lemon is group of people coming together to start up
        a food business
        </Title>
        </main>
    )
}

const Info = () => {
    return (
        <header>
            <Head>What is a Little Lemon</Head>
            <Switch />
        </header>
    )
}

function App() {
    const {theme} = useUser()
    return (
        <div
        style={{
            backgroundColor: theme === "light" ? "white" : "black"
        }}
        >
            <Info />
            <Paragraph />
        </div>
        
    )
}

function Root() {
    return ( 
         <UserContext> <App /></UserContext>
    )
}

export default Root
*/
/*
import React from "react"
import { useState } from "react"

export default function App() {
    const [giftCard, setGiftCard] = useState({
        firstName: "Gbenga",
        lastName: "Daniel",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    })

    const UpdateGiftCard = () => {
        setGiftCard((prevState) => {
            return {
            ...prevState,
            text: "Your coupon has been used",
            valid: false,
            instructions: "please visit our restaurant to renew your gift card..."
        }})
    }

    return (
        <div>
            <h1>Little Lemon Restaurant Gift Card</h1>
            <h2>
                customer: {giftCard.firstName} {giftCard.lastName}
            </h2>
            <h3>
                {giftCard.text}
            </h3>
            <p>
                {giftCard.instructions}
            </p>
            {
                giftCard.valid && 
                <button type="submit" onClick={UpdateGiftCard}>
                    click for updated gift card
                </button>
            }
        </div>
    )
}*/
/*
import React from "react"

function App() {
    const list = [
        {
            name: "Daniel",
            complexions: "chocolate",
            siblings: 6,
            house: "duplex",
        },
        {
            name: "Solomon",
            complexions: "yellow",
            siblings: 5,
            house: "mansion",
        },
        {
            name: "Israel",
            complexions: "dark",
            siblings: 3,
            house: "mansion",
        }
    ]

    const details = list.map((detail) => {
        return <li>{detail.name} - {detail.siblings} - {detail.house} </li>
    })
    return (
        <ul>
            <li>{details}</li>
        </ul>
    )
}

export default App
*/
/*
import React from "react"

function App() {
    const [toggle, setToggle] = React.useState(false)

    const clickHandler = () => {
        setToggle(!toggle)
    }

    React.useEffect(() => {
        document.title = toggle ? "you are welcome" : "using the use Effect hooks"
    }, []);

    return (
        <>
            <h1>Using the use Effect hooks</h1>
            <button onClick={clickHandler}>
                toggle button
            </button>
            {toggle && <h2>You are welcome</h2>}
        </>
    )
}

export default App
*/

import React from "react"

function App() {
    const [data, setData] = React.useState(null)

    const fetchData = () => {
        fetch("https://localhost:400/users/register")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch(error => console.error(error))
    }

    React.useEffect(() => {
        fetchData()
    }, []);

    return (
        <div>
            <form>
                <label htmlFor="username">username</label>
                <input type="text" id="username" name="username" />
                <label htmlFor="email">email</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input type="password" id="password" name="password" />
                <button type="submit">sign up</button>
            </form>
            <h1>registered user</h1>
            <ul>
        {Array.isArray(data) &&
          data.map((user) => (
            <React.Fragment key={user.id}>
              <li>{user.username}</li>
              <li>{user.email}</li>
            </React.Fragment>
          ))}
      </ul>
        </div>
    )
}
//"https://restcountries.com/v3.1/all"
//https://api.example.com/items
//https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js
export default App

/*
import React from "react"
import { useState } from "react"

const reducer = (state, action) => {
    if(action.type === "")
}

function App() {
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [number, setNumber] = useState()
    const [occasion, setOccasion] = useState()
    const isFormValid = () => {
        return (
            date &&
            time &&
            number &&
            occasion
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <fieldset>
            <label htmlFor="res-date">Chose date</label>
            <input type="date" id="res-date" value={date} onChange={e => setDate(e.target.value)}/>
            <label htmlFor="res-time">Chose time</label>
            <select id="res-time" value={time} onChange={e => setTime(e.target.value)}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label  htmlFor="guest">Number of guests</label>
            <input  type="number" placeholder="1" min="1" max="10" id="guest" value={number} onChange={e => setNumber(e.target.number)}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Night club</option>
            </select>
            <button  value="make your reservation" disabled={isFormValid} >submit</button>
            </fieldset>
        </form>
        </>
    )
}
//updating the above form using useReducer
export default App
*/

