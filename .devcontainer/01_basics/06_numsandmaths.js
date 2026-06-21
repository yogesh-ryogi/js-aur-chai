const score=100
console.log(score)

const balance=new number(1000)
console.log(balance)

console.log(balance.toString())
console.log(balance.toFixed(2))
console.log(balance.toExponential(2))
console.log(balance.toPrecision(3))
const num1=0.1
const num2=0.2
const sum=num1+num2
console.log(sum) // 0.30000000000000004

// To fix the precision issue, we can use the toFixed method:
const fixedSum=sum.toFixed(2)
console.log(fixedSum) // 0.30

// Alternatively, we can use the toPrecision method:
const preciseSum=sum.toPrecision(2)
console.log(preciseSum) // 0.3

const hundreds=10000000000
console.log(hundreds.toLocaleString()) // 10,000,000,000
console.log(hundreds.toLocaleString('en-IN')) // 10,000,000,000


//+++++++++++++++++++++++++++++ math methods +++++++++++++++++++++++++++++

