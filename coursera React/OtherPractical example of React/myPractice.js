function App(){
    function HandleClick() {
        let randomNumber = math.floor(math.random() * 3) + 1
        console.log(randomNumber)
        let userInput = prompt("enter any number: ")
        alert(`your guess = ${userInput}, computer number is: ${randomNumber}`)
    }
    return (){
        <div>
            <button onClick={HandleClick}></button>
        </div>
    }
}

function Math(props){
    return () {
        <div>
            <h1></h1>
        </div>
    }
}