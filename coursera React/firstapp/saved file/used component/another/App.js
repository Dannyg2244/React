import Heading from "./Heading.js"
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
     <Heading/>
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
