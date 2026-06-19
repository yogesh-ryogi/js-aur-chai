// for interview pov
//primitive data types
//7
// String, Number, Boolean, Undefined, Null, Symbol, BigInt

const score=100
const scoreValue=100.89

const isLoggedIn=true

const outsideTemp=null

let userEmail=undefined
const id = symbol('123')
const anotherId = symbol('123')
console.log(id===anotherId);

const bigNumber= 1234567890123456789012345678901234567890n


//Refrence data types
//Object, Array, Function, Date, RegExp, Map, Set, WeakMap, WeakSet

const heroes=["spiderman","ironman"];

let myObj={
    name:"raj",
    age:30,
}

function sayHello(){
    console.log("Hello");
}

//stack(for primitive data types) and heap(for refrence data types) memory allocation
let myName="raj"
let anotherName=myName
console.log(myName);
console.log(anotherName);

myName="john"
console.log(myName);
console.log(anotherName);

let myHero=["spiderman","ironman"]
let anotherHero=myHero
console.log(myHero);
console.log(anotherHero);

myHero.push("hulk")
console.log(myHero);
console.log(anotherHero);

