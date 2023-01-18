const Nav = (props) => { //function will not be written
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    );
};

//another way of writing arrow function is that using parenthesis 
//is optional if there is a single parameter that a function accept
const Nav = props => { //it can also be written this
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    );
};
[10, 20, 30].forEach(function(item){
    console.log(item*10)
})

[10, 20, 40].forEach(item => item * 10)


