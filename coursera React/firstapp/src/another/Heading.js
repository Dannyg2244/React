import React from "react"
function Heading(props){
    return (
        console.log(props)
        <h1>Hello there indeed, {props.name}, {props.color}</h1>
    )
}
export default Heading