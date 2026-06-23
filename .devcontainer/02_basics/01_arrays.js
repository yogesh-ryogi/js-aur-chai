//arrays
const fruits = ["apple", "banana", "cherry"];

const heros=new Array("spiderman", "batman", "superman");

console.log(fruits);
console.log(heros[1]);

//array methods
fruits.push("sapota");
console.log(fruits);
heros.pop();
console.log(heros);
fruits.unshift("mango");
console.log(fruits);
heros.shift();
console.log(heros);

console.log(fruits.includes("banana"));
console.log(heros.indexOf("spiderman"));


const myarry=[1,2,3,4,5,6,7,8,9];
const newarray=myarray.join();
console.log(myarray);
console.log(newarray);
console.log(typeof newarray);

//slice and splice
const myarray1=[1,2,3,4,5,6,7,8,9];
const newarray1=myarray1.slice(2,5);
console.log(myarray1);
console.log(newarray1);

const myarray2=[1,2,3,4,5,6,7,8,9];
const newarray2=myarray2.splice(2,5);
console.log(myarray2);
console.log(newarray2);

//slice does not manupilate the original array but splice does manipulate the original array
//slice returns a new array with the selected elements, while splice removes elements from the original array and can also add new elements.