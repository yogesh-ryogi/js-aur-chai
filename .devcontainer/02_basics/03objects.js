 //singleton
 //object literals
const mysymb=Symbol("key1");
 const person = {
    name:"yboss",
    "fullname":"yogesh",
    [mysymb]:"key1",
    age:25,
    address:{
        city:"pune",
        state:"maharashtra"
    },
    hobbies:["cricket","coding","reading"]
 }

 console.log(person.name);
 console.log(person.address.city);
 console.log(person.hobbies[1]);
 console.log(person["fullname"]);
console.log(person[mysymb]);

person.age=26
Object.freeze(person);
person.age=27;
console.log(person.age);

console.log(person)