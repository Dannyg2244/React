for(let i= 1; i < 50; i++){
    if((i%3 === 0) && i%5 === 0) {
        console.log("fizzbuzz");
    }
    else if(i%3 === 0) {
        console.log("fizz");
    }
    else if(i%5===0) {
        console.log("buzz");
    }
    else{
        console.log(i);
    }
}
const veggie = ['rice', 'beans', 'yam', 'milk', 'vegetable']
const [a, b, c, d, e] = veggie
console.log(a)