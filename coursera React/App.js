function Heading(){
    return{
        <h1>This is the h1 heading</h1>
    }
} 

function App(){
    return(
        <div className="App">
            this is the starting code of your "first component" ungraded lab
            <Heading /> 
        </div>
    )
}

export function Heading(props){
    return (
        <h1>{props.title}</h1>
    )
}

/* to work with props, import all the component you created using the importation procedure the write the below code*/
import Heading from "./component/Heading.js"
import Main from "./component/Main.js"
import Sidebar from "./component/Sidebar.js"
function App(){
    return(
        <div>
            <heading name="Anna" color="purple"/>
            <main />
            <sidebar />
        </div>
    )
}

export default App;