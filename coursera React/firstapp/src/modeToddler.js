function ModeToddler() {
    const darkModeOn = true
    const darkMode = <h1>Dark mode is on</h1>
    const lightMode = <h1>Light mode is on</h1>

    function HandleClick(){
       let darkModeOn = !darkModeOn
        if (darkModeOn === true){
            console.log("Dark mode is on")
        }
        else {
            console.log("Light mode is on")
        }
    }
    return (
        <div>
            {darkModeOn? darkMode : lightMode}
        <button onClick={HandleClick}>
            Click Me
        </button>
        </div>
    )
}

export default ModeToddler