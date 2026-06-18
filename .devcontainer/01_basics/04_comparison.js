console.log(2>1)
console.log(2<1)
console.log(2>=1)
console.log(2<=1)
console.log(2==1)
console.log(2!=1)       
console.log(2==="2")
console.log(2!=="2")

// two equal signs (==) checks for value equality, while three equal signs (===) checks for both value and type equality.
console.log(2=="2")  // true, because it converts the string "2" to the number 2 before comparing
console.log(2==="2") // false, because it checks for both value and type, and they are different types (number vs string)
console.log(2!="2")  // false, because it converts the string "2" to the number 2 before comparing
console.log(null==undefined)  // true, because null and undefined are considered equal in non-strict comparison

console.log(null>0)
console.log(null>=0)
console.log(null<0)        //avoid these types of comparisons, as they can lead to unexpected results due to type coercion in JavaScript.
console.log(null<=0)
console.log(null==0)
