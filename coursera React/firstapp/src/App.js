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
import {Routes, Route, Link} from "react-router-dom"
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

export default App;