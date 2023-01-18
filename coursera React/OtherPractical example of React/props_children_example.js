function Apple(props){
    return (
        <Div ClassName="promo-section">
            <div>
                <h2>These apples are: {props.color}</h2>
            </div>
            <div>
                <h3>There are {props.number} apples</h3>
            </div>
        </Div>
    )
}

function Pears(props){
    return (
        <h2>I don't like pear but my friend {props.friend} does</h2>
    )
}

function Bag(props){
    const bag {
        padding: "20px";
        border: "1px solid grey";
        background: "#fff";
        margin: "20px 0";
    }
    return (
        <div style={bag}>
            {props.children}
        </div>
    )
}
export default Bag

/*How to render the Bag component with the the Apple component as it props.children*/
<Bag children = {<Apple color = "Orange" number= "5" />} />
<Bag children = {<Pears friend = "Tunde"/>}/>
/**The above syntax is the same as the one written below */
<Bag>
    <Apple color= "Orange" number= "5" />
</Bag>
<Bag>
    <Pears friend="Tunde"/>
</Bag>