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
      <p>Description: {man.Description}</p>
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
/*
import { useState, useEffect, useRef } from "react"
import React from "react"

export default function App(){
   const [day, setDay] = useState("monday")
   const prevDay = Previous(day)

   const getDay = () => {
      if(day === "monday"){
         setDay("tuesday")
      }
      else if(day === "tuesday") {
         setDay("wednesday")
      }
      else if(day === "wednesday") {
         setDay("thursday")
      }
      else if(day === "thursday") {
         setDay("friday")
      }
      else if (day === "friday" ){
         setDay("monday")
      }
   }

   return(
      <div>
      <h1>The Workers Day</h1>
      <div>
         <h1>today is {day} </h1>
            {prevDay && <h2>The Previous Working day was {prevDay}</h2>}
            <button onClick={getDay}>get next day</button>
      </div>
      </div>
   )
}

function Previous(val) {
   const ref = useRef()
   useEffect(() => {
      ref.current = val
   }, [val])
   return ref.current
}
*/
/*
import React from "react"

function Button({children, backgroundColor}) {
   return <button style={backgroundColor}> {children}</button>
}
function Alert({children}) {
   return(
      <div>
      <div className="overlay" />
      <div className="alert">{children}</div>
      </div>
   )
}

function deleteButton() {
   <button style={backgroundColor = "red"}>Delete</button>
}
export default function App() {
   return (
      <div>
      <header>Little Lemon Restaurant</header>
      <Alert>
      <h1>Delete Account</h1>
      <p>Are you sure you wanna continue with the deletion</p>
      <deleteButton />
      </Alert>
      </div>
   )
}*/

/*
import React, {useState} from "react"

export default function App() {
   const [selected, setSelected] = useState("")
      return (
         <div className="App">
            <h1>How did you hear about us</h1>
            <RadioGroup onChange={setSelected} selected={selected}>
               <RadioOption value="Social-Media">Social-Media</RadioOption>
               <RadioOption value="Television">Television</RadioOption>
               <RadioOption value="News">News</RadioOption>
               <RadioOption value="Others">Others</RadioOption>
            </RadioGroup>
            <button disabled={!selected}>submit</button>
         </div>
      )
   }
export const RadioGroup = ({onChange, selected, children}) => {
   const RadioOption = React.Children.map(children, (child) => {
      return React.cloneElement( child, {
         onChange,
         checked : child.props.value === selected,
      })
   })
   return <div className="RadioGroup">{RadioOption}</div>
}

export const RadioOption = ({onChange, checked, value, children}) => {
   return (
      <div>
       <input
      type="radio"
      id={value}
      name={value}
      value={value}
      checked={checked}
      onChange={e => {onChange(e.target.value)}}
      />
      <label htmlFor={value}>{children}</label>
      </div>
   )
}*/
/*
import React from "react"
import { useState, useEffect } from "react"

const MousePosition = ({render}) => {
   const [MousePosition, setMosuePosition] = useState({
      x : 0,
      y : 0,
   })
      useEffect(() => {
         const handleMousePosition = (e) => {
         setMosuePosition({
            x: e.clientX,
            y: e.clientY
         })
   }
   window.addEventListener("mousemove", handleMousePosition)

   return () => {
      window.removeEventListener("mousemove", handleMousePosition)
   }
      }, [])
      return render({MousePosition})
}

const PanelMousePosition = () => {
   return (
      <div className="MouseTracker">
         <p>Mouse Position</p>
         <MousePosition
        render={({MousePosition}) => (
         <div>
         <span>x: {MousePosition.x}</span>
         <span>y: {MousePosition.y}</span>
         </div>
   )}
         />
      </div>
   )
}

const PointMousePosition = () => {
   return (
      <div>
         <MousePosition
         render={({MousePosition}) => (
            <div>
               <p> {MousePosition.x}, {MousePosition.y}</p>
            </div>
         )}
         />
      </div>
   )
}

export default function App() {
   return (
      <div>
         <header>Little Lemon Restaurant</header>
         <PanelMousePosition />
         <PointMousePosition />
      </div>
   )
}
*/
/*
import React from "react"
import { useState } from "react"
function FeedBackForm(props) {
   const [score, setScore] = useState("10")
   const [comment, setComment] = useState("")

   const isDisabled = Number(score) < 5 && comment.length <= 10

   let TextAreaPlaceHolder; 
   if (TextAreaPlaceHolder === isDisabled){
      alert("pls provide a comment explaining why the experience is not good  minimun 10 length")
   }
   else {
      alert("Optional Feedback")
   }

   function handleSubmit(e) {
      e.preventDefault()
      //  onSubmit({score, comment})
   }

   function handleClick(e) {
      setScore(e.target.value)
   }

      return (
      <div>
         <form onSubmit={handleSubmit}>
            <fieldset>
               <h2>Feedback Form</h2>
               <div>
         <label htmlFor="score">Score: </label>
         <input
         type="range"
         id={score}
         value={score}
         min="0"
         max="10"
         />
         <div>
            <div>
            <label>Comment</label>
            </div>
            <textarea
            name="comment"
            value="text"
            placeholder={TextAreaPlaceHolder}
            onChange={e => {setComment(e.target.value)}}
            />
         </div>
         <button disabled={isDisabled} onClick={handleClick}>submit</button>
         </div>
         </fieldset>
         </form>
      </div>
   )
}

export default function App() {
   const handleSubmit = (e) => {
      e.preventDefault()
   }
   return (
      <div>
         <FeedBackForm onSubmit={handleSubmit}/>
      </div>
   )
}*/
//Creating my simple Calculator
/*
import React from "react"
import {useState, useRef} from "react"
import "./App.css"

function Header() {
   return (
      <div className="header">
         <a href="https://github.com/Dannyg2244">github</a>
         <a href="https://www.linkedin.com/feed/">LinkedIn</a>
      </div>
   )
}

function Footer() {
   return(
      <div className="footer">
         <h1>@dannyg plc</h1>
      </div>
   )
}

function App() {
   const inputRef = useRef(null);
   const resultRef = useRef(null);
   const [result, setResult] = useState(0);
   const [word, setWord] = useState({
      greetings : "i Welcome you all to this wonderful presentation",
      title: "This is your boy Ikuyajolu Gbenga Daniel",
   })

   function handleClick(){
      setWord({
         ...word,
         greetings: "Thank you very much for your time. God Bless You",
         title: "Group Leader: Ikuyajolu Gbnega Daniel",
         members: "Taiwo Odunayo Solomon, Temidayo Bamidele",
      })
   }

   function plus(e) {
      e.preventDefault();
      setResult((result) => result + Number(inputRef.current.value))
   };

   function minus(e) {
      e.preventDefault();
      setResult((result) => result - Number(inputRef.current.value))
   };

   function divide(e){
      e.preventDefault();
      setResult((result) => result / Number(inputRef.current.value))
   };

   function times(e) {
      e.preventDefault();
      setResult((result) => result * Number(inputRef.current.value))
   };

   function resetInput(e) {
      e.preventDefault()
      setResult((result) => Number(inputRef.current.value))
   };

   function resetResult(e) {
      e.preventDefault()
      setResult((result) =>  Number(resultRef.current.value));
   };

   return (
      <div>
         <Header />
      <div className="App">
         <div>
            <h1>{word.greetings}</h1>
            <h2>{word.title} <br/> {word.members}</h2>
            <button onClick={handleClick}>Pls click Me When Done</button>
            <h1>A simple calculator</h1>
         </div>
         <form>
            <fieldset className="field">
         <p ref={resultRef}>
            {result}
         </p>
         <input
            pattern="[0-9]"
            ref={inputRef}
            type="number"
            placeholder="Type a number"
         />
         <button onClick={plus}>add</button>
         <button onClick={minus}>subtract</button>
         <button onClick={times}>multiply</button>
         <button onClick={divide}>divide</button>
         <button onClick={resetInput}>reset Input</button>
         <button onClick={resetResult}>reset result</button>
         </fieldset>
         </form>
      </div>
      <div>
      <Footer />
         </div>
      </div>
   )
}

export default App;
*/

import { ChakraProvider } from "@chakra-ui/react"

import Header from "./component/Header"
import { AlertProvider } from "./context/alertContext"
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
*/