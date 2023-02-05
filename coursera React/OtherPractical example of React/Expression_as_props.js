let bool = false
function Example(props){
    return (
        <h2>The value of the toggleBoolean prop is:{props.toggleBoolean.toString()}</h2>
    )
}
export default function App(){
    return (
        <div className="App">
            <Example toggleBoolean = {!bool} />
        </div>
    )
}

//several props being pass to the Example component

let bool = false
const str1 = "just"
function Example(props){
    return (
        <div>
            <h2>
                The value of the toggleBoolean is: {props.toggleBoolean.toString()}
            </h2>
            <p> The value of the Math props is: <em>{props.math}</em></p>
        </div>
    )
}

export default function App() {
    return (
        <div>
            <Example 
            toggleBoolean = {!bool}
            math = {(10 * 20)/ 3}
            str = {str1 + ' another ' + 'string'}
            />
        </div>
    );
};