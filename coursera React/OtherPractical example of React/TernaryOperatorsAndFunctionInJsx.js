const name = "Bob"
name == 'Bob'? console.log("hello Bob"): console.log("hello, friend")

//Using Ternary operator in Jsx

function Example(){
    return (
        <div className="heading">
            <h1>{Math.random() >= 0.5 ? "over 0.5" : "under 0.5"}</h1>
        </div>
    )
}

//Using function calls in JSX
function Example2(){
    return (
        <div className="heading">
            <h1>Here is a random number from 0 to 10:
                {Math.floor(Math.random() * 10) + 1}
            </h1>
        </div>
    )
}
//or extracting functionality into separate function

function Example3(){
    const getRandomNumber = () => Math.floor(Math.random() * 10) + 1
    return (
        <div>
        <h1>Here is a random number from 0 to 10: {getRandomNumber} </h1>
        </div>
    )
}
