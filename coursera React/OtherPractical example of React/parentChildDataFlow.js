//Parent component code

const data = {
    heading = "99% off all items"
    callToAction = "Everything must go!"
}

function Promo(){
    return (
        <div>
            <PromoHeading 
            heading = {data.heading}
            callToAction = {data.callToAction}
            />
        </div>
    )
}

//child component code

function PromoHeading(props){
    return (
        <div><h1>
            {props.heading}
        </h1>
        <h2>
            {props.callToAction}
        </h2>
        </div>
    )
}