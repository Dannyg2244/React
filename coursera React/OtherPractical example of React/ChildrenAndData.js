function Parent(){
    const date = new Date()
    return (
        <div>
            <child message={date.toLocalTimeString()}/>
        </div>
    )
}

function child(props){
    return (
        <div>
            <h1>{props.message}</h1>
        </div>
    )
}