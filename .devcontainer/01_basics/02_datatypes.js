"use strict";//treat all js code as modern
//alert(3+3)//we are using nodejs not browser so alert is not defined

//datatypes in js
//1. primitive datatypes: string, number, boolean, null, undefined, symbol
//2. non-primitive datatypes: object, array

let name="Yogesh" //string datatype
let age=24 //number datatype
let isMarried=false //boolean datatype
let city=null //null datatype
let state=undefined //undefined datatype
let id=Symbol("id") //symbol datatype//unique identifier

console.log(typeof name)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof city)
console.log(typeof state)
console.log(typeof id)

//non-primitive datatypes
let person={
    name:"Yogesh",
    age:24,
    city:"Bengaluru"
}

let numbers=[1,2,3,4,5]

console.log(typeof person) //object
console.log(typeof numbers) //object