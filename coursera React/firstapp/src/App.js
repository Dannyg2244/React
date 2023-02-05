/*import Heading from "./Heading.js"
import Nav from "./Nav.js"
import Promo from "./Promo.js"
import Intro1 from "./Intro1.js" 
import Intro2 from "./Intro2.js" 
import Intro3 from "./Intro3.js"
import Footer from "./Footer.js" 
import './App.css';

// function Header(){
//   return (
//   <h1>Hello World!</h1>
//   )
// }
function App() {
 return (
  <div>This is the starting code for "Your fisrt component" ungraded lab
     <Heading name={'Bola'} color={'red'} />
     <Nav />
     <Promo />
     <Intro1 />
     <Intro2 />
     <Intro3 />
     <Footer />
  </div>
 );
}

export default App;
*/
/*import './App.css'
import Btn from './Btn'

function App(){
   return(
      <Btn />
   )
}
export default App
*/
/*import "./App.css"
import ModeToddler from "./modeToddler"

function App(){
   return(
      <ModeToddler />
   )
}
export default App
*/
/*
import React, {  useState  } from "react"
import "./App.css"
import Heading from "./Heading"
function App(){
   const [word, setWord] = React.useState("Eat")
   function handleClick() {
      setWord("Drink")
   }
   return (
      <div className="App">
         <Heading message={word + " at little lemon"} />
         <button onClick={handleClick}>Click here</button>
      </div>
   )
}

export default App
*/
/*import {Routes, Route, Link} from "react-router-dom"
import React from "react"
import Contact from "./Contact"
import AboutMe from "./AboutMe"
import Homepage from "./Homepage"

function App(){
   return(
      <div className="App">
         <nav>
            <Link to="/" className="nav-item">Homepage</Link>
            <Link to="/about-me" className="nav-item">About Me</Link>
            <Link to="/contact-me" className="nav-item">Contact</Link>
         </nav>
         <Routes>
         <Route path="/" element={<Homepage />} />
         <Route path="/about-me" element={<AboutMe />} />
         <Route path="/contact-me" element={<Contact message= "you can reach my by calling 08039884957" />} />
         </Routes>
      </div>
   )
}
*/
/*
import React from "react"
import { useState } from "react";
import "./App.css"

function errorMessage(){
   return (
      <h1 className="error">Password must be at least 8 character long</h1>
   )
}
function App() {
   const [firstName, setFirstName] = useState("")
   const [lastName, setLastName] = useState("")
   const [email, setEmail] = useState("")
   const [contact, setContact] = useState("")
   const [feedback, setFeedback] = useState("")
   const [password, setPassword] = useState({
      value : "",
      isTouched : false,
   })
   const [degree, setDegree] = useState("degree")

function clearForm(){
   setFirstName("")
   setLastName("")
   setEmail("")
   setContact("")
   setFeedback("")
   setPassword({
      value : "",
      isTouched : false,
   })
   setDegree("degree")
}

const isFormValid = () => {
   return (
      firstName &&
      lastName &&
      email &&
      contact &&
      degree !== degree &&
      feedback &&
      password.value.length >= 8

   )
}

function handleSubmit(e){
   e.preventDefault()
   alert("form submitted")
   clearForm()
}

   return  (
      <div className="App">
      <form onSubmit={handleSubmit}>
      <fieldset className="fieldset">
         <div className="field">
            <label>FirstName:</label>
            <input type="text" 
            placeholder="First name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}/>
         </div>
         <div className="field">
            <label>lastName:</label>
            <input type="text"
             placeholder="Last name"
             value={lastName}
             onChange={e => setLastName(e.target.value)}
             />
         </div>
         <div className="field">
            <label>Email:</label>
            <input type="email"
             placeholder="email"
             value={email}
             onChange={e => setEmail(e.target.value)}
            />
         </div>
         <div className="field">
            <label>Contact:</label>
            <input type="tel" 
            placeholder="Contact"
            value={contact}
            onChange={e => setContact(e.target.value)}
            />
         </div>
         <div className="field">
            <label>Feedback:</label>
            <textarea type="text" 
            placeholder="comment"
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
            />
         </div>
         <div className="field">
            <label>Password:</label>
            <input type="password" 
            placeholder="Password"
            value={password.value}
            onChange={e => setPassword({...password, value: e.target.value})}
            onBlur={e => setPassword({...password, isTouched: true})}
            />
            {password.value.length < 8 && password.isTouched ? 
            (<errorMessage />) : null}
         </div>
         <div className="field">
            <label>select:</label>
         <select placeholder="select" value={degree} onChange={e => setDegree(e.target.value)}>
            <option>First Class</option>
            <option>Second Class Upper </option>
            <option>Second Class Lower </option>
            <option>Third Class </option>
            <option>Fail </option>
         </select>
         </div>
         <div className="butt">
            <button type="submit" disabled={!isFormValid()} >submit</button>
         </div>
      </fieldset>
   </form>
   </div>
   )
}
export default App
*/
/*
import { userProvider } from "./UserContext";
import React from "react";

const userLogged = () =>{
   const [user] = useUser()
   return (
      <div>
         Author: <span className="spanName">{user.name} </span>
      </div>
   )
}

const Header = () => {
   return (
      <header>
         <h1>Dannyg Blog Post</h1>
         <userLogged />
      </header>
   )
}

const Page = () => {
   const [user] = useUser()
   return (
      <div>
         <p>
            my name is Daniel and am a front-End engineer. feel free to patronize Me
            Thanks
         </p>
         <p>Written by:{user.name} </p>
      </div>
   )
}

function App() {
   return (
      <div>
         <Header />
         <Page />
      </div>
   )
}


function Root(){
   return (
      <userProvider> <App /></userProvider>
   )
}

export default Root
*/

//import { useState, useEffect, useReducer } from "react";
//import React from "react";
/*function App() {
   const [name, setName] = useState('tobi')
   function handleClick(e){
      setName("little lemon")
      console.log("clicked")
   }
   return (
      <div>
      <h1>{name}</h1>
      <button value={name} onClick={handleClick}>clickme</button>
      </div>
   )
}*/
/*
function App(){
   const [greeting, setGreeting] = useState({greet: "Hello Everybody",})
   function handleClick(){
      setGreeting({greet: "Hello, World-Wide web"})
   }
   return (
      <div>
         <h1>{greeting.greet}</h1>
         <button onClick={handleClick}>greet the world</button>
      </div>
   )
}*/

//updated useState hook code
/*
function App() {
   const [greeting, setGreeting] = useState({greet : "Hello World"})
   function handleClick(){
      const newGreeting = {...greeting}
      newGreeting.greet = "hello, World-Wide Web"
      setGreeting(newGreeting)
   }
   return(
      <div>
         <h1>{greeting.greet}</h1>
         <button onClick={handleClick}>updated greeting</button>
      </div>
   )
}
*/

//another updated useState hook code
/*
function App() {
   const [greeting, setGreeting] = useState({
      greet : "Hello World",
      place : "globally",
      venue : "bariga",
   })
   const handleClick = () => {
      const newGreeting = {...greeting}
      newGreeting.place = "Locally"
      setGreeting(newGreeting) 
   }
   return (
      <div>
         <h1>{greeting.greet}, {greeting.place}, {greeting.venue}</h1>
         <button onClick={handleClick}>updated greeting</button>
      </div>
   )
}

export default App
*/
/*
export default function App() {
   const [man, setMan] = useState({
      firstName : "daniel",
      lastName : "gbenga",
      Description : "this is your name and i am glad it is",
      place : "shomolu",
      email : "ikuyajolugbenga@gmail.com",
   })
   function setManHead() {
      setMan(prevState => {
         return {
         ...prevState,
         Description : "now this your name",
         place : "Bariga",
         email : "gbengadaniel12345@gmail.com",
         }
      })
   }
   return (
      <>
      <h1>Your Details</h1>
      <h2>Name: {man.firstName} {man.lastName}</h2>
      <p>Discription: {man.Description}</p>
      <p>place: {man.place} </p>
      <p>your email is {man.email} </p>
      <p>
         please click on this **
         <button value={man} onClick={setManHead}>click me</button>
      </p>
      </>
   )
} 
*/

/*
//Using and calling useEffect hooks
import { useEffect } from "react";

export default function App() {
   const [toggle, setToggle] = React.useState(false)

   function handleClick() {
      setToggle(!toggle)
   }

   useEffect(() => {
      document.title = toggle ? "This is the Opening page" : "Welcome to the world"
   }, [toggle])

   return (
      <div>
         <h1>This is the Opening page</h1>
         <button onClick={handleClick}>toggle button</button>
         {toggle && <h2>Welcome to the world</h2>}
      </div>
   )
}
*/


/*
//import {useState, useEffect} from "react"

export default function App(){
   const [user, setUser] = React.useState([])

   const fetchData = () => {
      fetch("https://www.istockphoto.com/photos/flowering-plant")
      .then((response) => response.json)
      .then((data) => setUser(data))
   }

   React.useEffect(() => {
      fetchData()
   }, []);

   return Object.keys(user).length > 0 ? (
      <div>
      <h1>Welcome to my flower site</h1>
      <h2>flower: {user[0].name.flower} </h2>
      </div>
   ) : (
      <h1>Flower Pending...</h1>
   )
}
*/


/*
//Using the useReducer hooks
//the action.type is used for button tag
const reducer = (state, action) => {
   if (action.type === "poor_man_order") return {money : state.money - 10}
   if (action.type === "middle_man_order") return {money : state.money + 10}
   if (action.type === "celebrity_man_order") return {money : state.money + 5000}
}

export default function App() {
   const initialState = {money : 100}
   const [state, dispatch] = useReducer(reducer, initialState)

   const handleClick = () => {
      dispatch({
         type : "poor_man_order",
         })
   }
   const clickHandling = () => {
      dispatch({
         type : "middle_man_order",
      })
   }
   const clickhanded = () => {
      dispatch({
         type : "celebrity_man_order"
      })
   }

   return (
      <div>
         <h1>Wallet: {state.money} </h1>
         <div>
            <button onClick={handleClick}>poor_man_order</button>
            <button onClick={clickHandling}>middle_man_order</button>
            <button onClick={clickhanded}>celebrity_man_order</button>
         </div>
      </div>
   )
}
*/
//Using useRef to access underlying DOM

/*import { useRef } from "react";
import React from "react"
export default function App() {
   const formInputRef = React.useRef()
   const setInput = () => {
      formInputRef.current.focus()
   }
   return (
      <div>
         <input ref={formInputRef} type="text"/>
         <button onClick={setInput} >Access the DOM</button>
      </div>
   )
}*/

import React, { useEffect, useState, useRef } from "react"
//import {useState, useRef} from "react"

export default function App() {
   const [day, setDay] = React.useState("monday")
   const prevDay = usePrevious(day)

   
   const getNextDay = () => {
   if (day === "monday") {
      setDay("tuesday")
   }
   else if(day === "tuesday") {
      setDay("wednesday")
   }
   else if(day === "wednesday") {
      setDay("thursday")
   }
   else if (day === "thursday") {
      setDay("friday")
   }
   else if (day === "friday") {
      setDay("monday")
   }
}
   return (
      <div>
         <h1>
            Today is: {day} <br/>
            { prevDay && <span>yesterday working day was: {prevDay}</span>}
         </h1>
         <button onClick={getNextDay}>get next day</button>
      </div>
   )
}
// To define your own hook state, it has to be outside the function App
const usePrevious = (val) => {
   const ref = React.useRef()
   useEffect(() => {
      ref.current = val
   }, [val])
   return ref.current
}

//export default usePrevious