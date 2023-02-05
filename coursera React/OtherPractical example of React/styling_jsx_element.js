function Promo(props){
    return (
        <div className="promo-section">
            <div>
                <h2>{props.heading}</h2>
            </div>
            <div>
                <h3>{props.subHeading}</h3>
            </div>
        </div>
    )
}

/**in the css */
.promo-Section{
    font-Weight: bold;
    line-Height: 20px;
}

/**or adding some inline styles to it using the code below*/

function Promo(props){
    return (
        <div className="promo-section">
            <div>
                <h1 style={{color: red, fontSize: 40px, fontWeight: bold}}>
                    {props.heading}
                </h1>
            </div>
            <div>
                <h2>{props.subHeading}</h2>
            </div>
        </div>
    )
}