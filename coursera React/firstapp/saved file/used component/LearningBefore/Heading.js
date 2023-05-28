/*import React from "react"
function Heading(props){
    return (
        <div>
        <h1> Hello there indeed {props.name} and {props.color}</h1>
        </div>
    );
};
export default Heading
*/

import React from "react";

function Heading(props){
    return (
        <div>
            <h1>{props.message}</h1>
        </div>

    )
}
export default Heading