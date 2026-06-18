let score=  "100abc" //string datatype
console.log(score) //100abc
console.log(typeof score) //string

//convert string to number
let convertedScore=Number(score)
console.log(convertedScore) //NaN
console.log(typeof convertedScore) //number
let marks=null
console.log(marks) //null
console.log(typeof marks) //object

//convert null to number
let convertedMarks=Number(marks)
console.log(convertedMarks) //0
console.log(typeof convertedMarks) //number

let isPassed=true
console.log(isPassed) //true
console.log(typeof isPassed) //boolean

//convert boolean to number
let convertedIsPassed=Number(isPassed)
console.log(convertedIsPassed) //1
console.log(typeof convertedIsPassed) //number

let isFailed=false
console.log(isFailed) //false
console.log(typeof isFailed) //boolean

//convert boolean to number
let convertedIsFailed=Number(isFailed)
console.log(convertedIsFailed) //0
console.log(typeof convertedIsFailed) //number

let name=undefined
console.log(name) //undefined
console.log(typeof name) //undefined        
//convert undefined to number
let convertedName=Number(name)
console.log(convertedName) //NaN
console.log(typeof convertedName) //number

num=3;
negativeNum=-num
console.log(negativeNum) //-3  

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2) //modulus operator gives the remainder of the division 
console.log(2**2) //exponentiation operator gives the result of raising the first operand to the power of the second operand

str1="yogesh"
str2="rajanna"
str3=str1+str2
console.log(str3) //yogeshrajanna

str4=str1+" "+str2
console.log(str4) //yogesh rajanna

console.log("1"+2)
console.log(1+"2") //yogesh2
console.log("1"-2) //yogesh2
console.log("1"+2+2)
console.log(1+2+"2")

console.log(true)
console.log(+true)//1
console.log(+"")

let gameCounnter=100
gameCounnter++
console.log(gameCounnter) //101 
gameCounnter--
console.log(gameCounnter) //100

// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion