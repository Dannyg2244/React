//Event handling using inline anonymous ES5 function
<>//Event handling using inline anonymous ES5 function
    <button onClick={function () { console.log("first example") } }>
        An inline anonymous function event handler
    </button>
    //Event handling using inline anonymous ES6 function
    <button onClick={() => console.log("second example")}>
        An inline anonymous function event handler
    </button></>

//Handling event using separate function declaration
function App(){
    function ThirdExample() {
        console.log("third example")
    }
    return (
        <div className="thirdExample">
        <button onClick={ThirdExample()}>
            Using separate function declaration
        </button>
        </div>
    )
}

//Handling event using separate function expression

function App() {
    const forthExample = () => console.log("forth example")
    return (
        <div className= "forthExample">
            <button onClick={forthExample}>
                Using separate function expression
            </button>
        </div>
    )
}