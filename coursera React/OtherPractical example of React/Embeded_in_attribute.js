import avatar from "./avatar.png"

function Logo(props){
    const imagePic = <img src={avatar} />
    return imagePic
}

function App(){
    return (
        <div>
            <h1>Hello World</h1>
        <Logo />
        </div>
    )
}
export default App